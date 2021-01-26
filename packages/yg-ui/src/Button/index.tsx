import React from 'react';

const Button: React.FC<{ text: string }> = ({ text }) => (
  <button data-testid="button-component" className={`button-component-${text}`}>
    {text}
  </button>
);

export default Button;
