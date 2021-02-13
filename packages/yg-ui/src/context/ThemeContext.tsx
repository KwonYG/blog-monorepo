import React from 'react'
import defaultTheme from '../themes/default'
import { DefaultTheme } from '../themes/theme.types'

interface ThemeContextInterface<T> {
  theme: T
}

export const ThemeContext = React.createContext<ThemeContextInterface<DefaultTheme>>({
  theme: defaultTheme,
})

interface ThemeProviderProps {
  children: React.ReactNode
  value?: any
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
