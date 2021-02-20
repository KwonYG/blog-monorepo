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
  className: 'border w-1/4',
}

export const ImageCard = Template.bind({})
ImageCard.args = {
  className: 'rounded-none border h-72',
  backgroundImgUrl:
    'http://www.busan.com/nas/data/content/image/2017/06/21/20170621000109_0.jpg',
  children: (
    <>
      <CardHeader />
      <CardBody>
        <p>fawmkfnejkawnfjkewanfaejwkn</p>
      </CardBody>
    </>
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
