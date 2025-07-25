// Toast Hook Implementation | Implementação do Hook de Toast
// Manages toast notifications throughout the application | Gerencia notificações toast em toda a aplicação

import * as React from "react" // React core library | Biblioteca principal do React

// Toast component types import | Importação dos tipos do componente Toast
import type {
  ToastActionElement, // Type for toast action buttons | Tipo para botões de ação do toast
  ToastProps, // Toast component props type | Tipo das props do componente Toast
} from "@/components/ui/toast"

// Toast configuration constants | Constantes de configuração do toast
const TOAST_LIMIT = 1 // Maximum number of toasts shown simultaneously | Número máximo de toasts mostrados simultaneamente
const TOAST_REMOVE_DELAY = 1000000 // Delay before removing toast from DOM (ms) | Atraso antes de remover toast do DOM (ms)

// Extended toast type with additional properties | Tipo de toast estendido com propriedades adicionais
type ToasterToast = ToastProps & {
  id: string // Unique identifier for each toast | Identificador único para cada toast
  title?: React.ReactNode // Optional toast title | Título opcional do toast
  description?: React.ReactNode // Optional toast description | Descrição opcional do toast
  action?: ToastActionElement // Optional action button | Botão de ação opcional
}

// Action types for toast state management | Tipos de ação para gerenciamento de estado do toast
const actionTypes = {
  ADD_TOAST: "ADD_TOAST", // Add new toast action | Ação de adicionar novo toast
  UPDATE_TOAST: "UPDATE_TOAST", // Update existing toast action | Ação de atualizar toast existente
  DISMISS_TOAST: "DISMISS_TOAST", // Dismiss toast action | Ação de dispensar toast
  REMOVE_TOAST: "REMOVE_TOAST", // Remove toast from DOM action | Ação de remover toast do DOM
} as const

// Global counter for generating unique IDs | Contador global para gerar IDs únicos
let count = 0

/**
 * Generates unique ID for each toast
 * Gera ID único para cada toast
 */
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER // Increment with overflow protection | Incrementa com proteção contra overflow
  return count.toString() // Return as string | Retorna como string
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
