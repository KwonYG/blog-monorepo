import React from 'react'
import defaultTheme from '../themes/default'
import { DefaultTheme } from '../themes/theme.types'

// TODO: 안쓰는 컨텍스트. 임시로 남겨두고 현재 테마 적용 방식에 이슈가 안생기면 삭제하기
interface ThemeContextInterface<T> {
  theme: T
}

export const ThemeContext = React.createContext<
  ThemeContextInterface<DefaultTheme>
>({
  theme: defaultTheme,
})

interface ThemeProviderProps {
  children: React.ReactNode
  value?: any
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  value,
}) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
