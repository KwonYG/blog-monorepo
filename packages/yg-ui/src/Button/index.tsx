import React from 'react'

const haha = {
  heewf: 'fewfewfe',
}

const Button: React.FC<{text: string}> = ({text}) => (
  <button data-testid="button-component" className={`button-component-${text}`}>
    {text}
  </button>
)

export default Button
