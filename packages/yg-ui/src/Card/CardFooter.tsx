import React from 'react'
import { CardFooterProps } from './Card.type'

function CardFooter({ className, children }: CardFooterProps) {
  return <div className={className}>{children}</div>
}

export default CardFooter
