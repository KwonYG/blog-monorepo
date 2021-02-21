import React, { Children, useContext } from 'react'
import classNames from 'classnames'
import { CardProps } from './Card.type'
import { ThemeContext } from '../context/ThemeContext'

function Card({ className, children, backgroundImgUrl }: CardProps) {
  const {
    theme: { card },
  } = useContext(ThemeContext)

  return (
    <div className={`yg-card ${className}`}>
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
  <>
    <img
      src={backgroundImgUrl}
      alt=""
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
    />
    <div className="absolute bottom-0 left-0 ">{children}</div>
  </>
)

export default Card
