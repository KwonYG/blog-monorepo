import defaultTheme from './default'

export interface ThemeInterface {
  card?: {
    base: 'min-w-0 rounded-lg shadow-xs overflow-hidden'
    default: 'bg-gray-300 dark:bg-gray-800'
  }
}

export type DefaultTheme = typeof defaultTheme
