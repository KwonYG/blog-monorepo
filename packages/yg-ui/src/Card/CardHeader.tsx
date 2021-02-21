import React from 'react'
import { CardHeaderProps } from './Card.type'

function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={`yg-card-header ${className}`}>{children}</div>
}

export default CardHeader
