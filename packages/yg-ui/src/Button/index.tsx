import React from 'react'
import {ButtonProps} from './Button.type'

function Button({text, className}: ButtonProps) {
  return (
    <button data-testid="button-component" className={`button-component-${text} ${className}`}>
      {text}
    </button>
  )
}

export default Button
