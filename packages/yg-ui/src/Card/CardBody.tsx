import React, { useContext } from 'react'
import classNames from 'classnames'
import { CardBodyProps } from './Card.type'
import { ThemeContext } from '../context/ThemeContext'

function CardBody({ className, children }: CardBodyProps) {
  const {
    theme: { cardBody },
  } = useContext(ThemeContext)

  const baseStyle = cardBody.base

  const classNameToApply = classNames(baseStyle, className)

  return <div className={classNameToApply}>{children}</div>
}

export default CardBody
