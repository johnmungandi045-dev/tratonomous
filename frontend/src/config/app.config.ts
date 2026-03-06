export interface AppConfig {
  appName: string
  displayName: string
  shortName: string
  description: string
  company: string
  supportEmail: string
  apiUrl: string
  version: string
}

export const appConfig: AppConfig = {
  appName: import.meta.env.VITE_APP_NAME ?? 'tratonomous',
  displayName: import.meta.env.VITE_APP_DISPLAY_NAME ?? 'Tratonomous',
  shortName: import.meta.env.VITE_APP_SHORT_NAME ?? 'Tratonomous',
  description:
    import.meta.env.VITE_APP_DESCRIPTION ??
    'Tratonomous - Open Source Algorithmic Trading Platform',
  company: import.meta.env.VITE_APP_COMPANY ?? 'Marketcalls',
  supportEmail: import.meta.env.VITE_APP_SUPPORT_EMAIL ?? 'support@tratonomous.in',
  apiUrl: import.meta.env.VITE_APP_API_URL ?? 'http://localhost:5000',
  version: import.meta.env.VITE_APP_VERSION ?? '0.0.0',
}
