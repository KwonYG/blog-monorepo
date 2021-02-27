import React from 'react'
import { CardProps } from './Card.type'

function Card({
  className,
  children,
  backgroundImgUrl,
  backgroundPosition,
}: CardProps) {
  return (
    <article
      className={`yg-card ${className}`}
      style={{
        backgroundImage: `url(${backgroundImgUrl})`,
        backgroundPosition: backgroundPosition,
      }}
    >
      {children}
    </article>
  )
}

export default Card
