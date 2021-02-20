interface BaseProperty {
  className?: string
  children?: React.ReactNode
}

export interface CardProps extends BaseProperty {
  backgroundImg?: React.ReactNode
}

export type CardHeaderProps = BaseProperty

export type CardBodyProps = BaseProperty

export type CardFooterProps = BaseProperty
