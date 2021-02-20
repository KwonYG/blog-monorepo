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
  <div className="relative">
    <img src={backgroundImgUrl} alt="" style={{ margin: 0 }} />
    <div className="absolute bottom-0 left-0 ">{children}</div>
  </div>
)

export default Card
