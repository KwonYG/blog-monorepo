import React from 'react'
import Card from '.'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import { CardProps } from './Card.type'
import { Story } from '@storybook/react'

export default {
  title: 'Card',
  component: Card,
}

const BASE_BUTTON =
  'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg bg-gray-500'

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Card1 = Template.bind({})
Card1.args = { className: BASE_BUTTON }

export const Card2 = Template.bind({})
Card2.args = {
  className: BASE_BUTTON,
  children: (
    <>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </>
  ),
}
