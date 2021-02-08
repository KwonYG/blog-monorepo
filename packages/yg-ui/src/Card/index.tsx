import React from 'react'
import { CardProps } from './Card.type'

function Card({ className, children }: CardProps) {
  return <div className={className}>{children}</div>
}

export default Card
