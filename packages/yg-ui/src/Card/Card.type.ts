interface BaseProperty {
  className?: string
  children?: React.ReactNode
}

export interface CardProps extends BaseProperty {
  backgroundImgUrl?: string
  backgroundPosition?: string
}

export type CardHeaderProps = BaseProperty

export type CardBodyProps = BaseProperty

export type CardFooterProps = BaseProperty
