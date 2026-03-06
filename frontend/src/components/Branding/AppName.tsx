import { appConfig } from '@/config/app.config'

export function AppName() {
  return <>{appConfig.displayName}</>
}

export function AppTagline() {
  return <>{appConfig.description}</>
}

export function AppVersion() {
  return <>{appConfig.version}</>
}

export function CompanyName() {
  return <>{appConfig.company}</>
}

export function ShortName() {
  return <>{appConfig.shortName}</>
}
