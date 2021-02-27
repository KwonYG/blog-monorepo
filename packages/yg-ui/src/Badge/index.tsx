import React, { useContext } from 'react'
import { BadgeProps } from './Badge.type'

function CardBody({ className, text, children }: BadgeProps) {
  return <div className={`yg-card-body ${className}`}>{children}</div>
}

export default CardBody
