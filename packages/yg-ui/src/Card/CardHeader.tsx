import React from 'react'
import { CardHeaderProps } from './Card.type'

function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={className}>{children}</div>
}

export default CardHeader
