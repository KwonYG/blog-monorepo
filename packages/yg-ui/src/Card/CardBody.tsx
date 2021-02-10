import React, { useContext } from 'react'
import { CardBodyProps } from './Card.type'

function CardBody({ className, children }: CardBodyProps) {
  return <div className={className}>{children}</div>
}

export default CardBody
