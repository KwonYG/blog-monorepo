import React, { useContext } from 'react'
import { CardBodyProps } from './Card.type'

function CardBody({ className, children }: CardBodyProps) {
  return <div className={`yg-card-body ${className}`}>{children}</div>
}

export default CardBody
