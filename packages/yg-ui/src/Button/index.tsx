import React from 'react'
import { ButtonProps } from './Button.type'

function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button className={`yg-button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
