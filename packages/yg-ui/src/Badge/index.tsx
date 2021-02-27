import React from 'react'
import { BadgeProps } from './Badge.type'

function Badge({ className, children }: BadgeProps) {
  return <span className={`yg-badge ${className}`}>{children}</span>
}

export default Badge
