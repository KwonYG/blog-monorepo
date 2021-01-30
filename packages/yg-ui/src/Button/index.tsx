import React from 'react'
import {ButtonProps} from './Button.type'

const Button: React.FC<ButtonProps> = ({text, className}) => {
  return (
    <button data-testid="button-component" className={`button-component-${text} ${className}`}>
      {text}
    </button>
  )
}

export default Button
