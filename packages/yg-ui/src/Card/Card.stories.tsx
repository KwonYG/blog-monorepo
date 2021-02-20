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
  className: '',
}

export const ImageCard = Template.bind({})
ImageCard.args = {
  className: 'h-30',
  backgroundImgUrl:
    'http://www.busan.com/nas/data/content/image/2017/06/21/20170621000109_0.jpg',
  children: (
    <>
      <CardHeader className="w-15 break-words text-white">
        유희열 미소는 천사미소
      </CardHeader>
      <CardBody>
        <p className="text-white">이건 거의 알비급..</p>
      </CardBody>
    </>
  ),
}
