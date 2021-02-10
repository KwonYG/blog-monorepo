import React, { useContext } from 'react'
import { CardProps } from './Card.type'
import { ThemeContext } from '../context/ThemeContext'

// TODO: 커스터마이징 하게 어케 하지
function Card({ className, children }: CardProps) {
  const {
    theme: { card },
  } = useContext(ThemeContext)

  const defaultStyle = card.default

  return <div className={defaultStyle}>{children}</div>
}

export default Card
