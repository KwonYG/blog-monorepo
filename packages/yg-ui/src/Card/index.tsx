import React, { Children, useContext } from 'react'
import classNames from 'classnames'
import { CardProps } from './Card.type'
import { ThemeContext } from '../context/ThemeContext'

function Card({ className, children, backgroundImgUrl }: CardProps) {
  const {
    theme: { card },
  } = useContext(ThemeContext)

  const baseStyle = card.base
  const defaultStyle = card.default

  const classNameToApply = classNames(baseStyle, defaultStyle, className)

  return (
    <div className={classNameToApply}>
      {backgroundImgUrl ? (
        <BgTag backgroundImgUrl={backgroundImgUrl}>{children}</BgTag>
      ) : (
        children
      )}
    </div>
  )
}

export interface BgTagProps {
  backgroundImgUrl: string
  children?: React.ReactNode
}

const BgTag = ({ backgroundImgUrl, children }: BgTagProps) => (
  <div
    style={{
      backgroundImage: `url("${backgroundImgUrl}")`,
      width: '100%',
      height: '100%',
    }}
  >
    {children}
  </div>
)

export default Card
