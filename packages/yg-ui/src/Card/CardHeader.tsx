import React, { useContext } from 'react'
import classNames from 'classnames'
import { CardHeaderProps } from './Card.type'
import { ThemeContext } from '../context/ThemeContext'

function CardHeader({ className, children }: CardHeaderProps) {
  // TODO: 살짝 반복되는데 훅으로 뺄지 고민
  const {
    theme: { cardHeader },
  } = useContext(ThemeContext)

  const baseStyle = cardHeader.base

  const classNameToApply = classNames(baseStyle, className)

  return <div className={classNameToApply}>{children}</div>
}

export default CardHeader
