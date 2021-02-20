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

const Template: Story<CardProps> = (args) => <Card {...args} />

export const BasicCard = Template.bind({})
BasicCard.args = {
  children: 'hahaha',
  className: 'rounded-none w-1/4',
}

export const ImageCard = Template.bind({})
ImageCard.args = {
  children: 'hahaha',
  className: 'rounded-none',
  backgroundImg: (
    <img
      alt="유희열"
      src="http://www.busan.com/nas/data/content/image/2017/06/21/20170621000109_0.jpg"
    />
  ),
}

// export const Card2 = Template.bind({})
// Card2.args = {
//   children: (
//     <>
//       <CardHeader />
//       <CardBody />
//       <CardFooter />
//     </>
//   ),
// }
