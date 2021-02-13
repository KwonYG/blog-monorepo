import React, { useContext } from 'react'
import classNames from 'classnames'
import { CardProps } from './Card.type'
import { ThemeContext } from '../context/ThemeContext'
import { mergeDeep } from '../utils'

function Card({ className, children }: CardProps) {
  console.log(
    mergeDeep(
      { A: 'fewafew', B: { Ba: 'wefew', Bb: 123 }, C: null, D: { Da: 'fwe' } },
      { A: 111, B: { Ba: '555', Bb: 555 } },
    ),
  )

  const {
    theme: { card },
  } = useContext(ThemeContext)

  const baseStyle = card.base
  const defaultStyle = card.default

  const classNameToApply = classNames(baseStyle, defaultStyle, className)

  return <div className={classNameToApply}>{children}</div>
}

export default Card
