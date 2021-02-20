import React, { useContext } from 'react'
import classNames from 'classnames'
import { CardProps } from './Card.type'
import { ThemeContext } from '../context/ThemeContext'

function Card({ className, children, backgroundImg }: CardProps) {
  const {
    theme: { card },
  } = useContext(ThemeContext)

  const baseStyle = card.base
  const defaultStyle = card.default

  const classNameToApply = classNames(baseStyle, defaultStyle, className)

  return (
    <div className={classNameToApply}>
      {backgroundImg}
      {children}
    </div>
  )
}

export default Card
