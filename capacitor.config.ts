import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.25fa94a7c9a64b5a87689b9c99d80fd7',
  appName: 'Focus Finance',
  webDir: 'dist',
  server: {
    url: "https://25fa94a7-c9a6-4b5a-8768-9b9c99d80fd7.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;