// Utility functions for CSS class management | Funções utilitárias para gerenciamento de classes CSS
// Combines clsx and tailwind-merge for optimal class handling | Combina clsx e tailwind-merge para manuseio otimizado de classes

import { clsx, type ClassValue } from "clsx" // Conditional class names utility | Utilitário para nomes de classe condicionais
import { twMerge } from "tailwind-merge" // Tailwind class merge utility | Utilitário para mesclagem de classes Tailwind

/**
 * Combines multiple class values and merges Tailwind classes efficiently
 * Combina múltiplos valores de classe e mescla classes Tailwind eficientemente
 * 
 * @param inputs - Array of class values (strings, objects, arrays)
 * @returns Merged and optimized class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)) // First clsx processes conditionals, then twMerge deduplicates | Primeiro clsx processa condicionais, depois twMerge remove duplicatas
}
