import React, { useContext } from 'react'
import classNames from 'classnames'
import { CardBodyProps } from './Card.type'
import { ThemeContext } from '../context/ThemeContext'

function CardBody({ className, children }: CardBodyProps) {
  const {
    theme: { card },
  } = useContext(ThemeContext)

  const baseStyle = card.base
  const defaultStyle = card.default

  const classNameToApply = classNames(baseStyle, defaultStyle, className)

  return <div className={className}>{children}</div>
}

export default CardBody
