import React from 'react'
import {ButtonProps} from './Button.type'
import '../../style/tailwind.css'

function Button({text, className}: ButtonProps) {
  const BASE_BUTTON =
    'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg bg-gray-500'

  return (
    <button data-testid="button-component" className={className ? className : BASE_BUTTON}>
      {text}
    </button>
  )
}

export default Button
