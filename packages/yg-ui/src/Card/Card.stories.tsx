import React from 'react'
import Card from '.'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import { CardProps } from './Card.type'
import { Story } from '@storybook/react'

export default {
  title: 'Card(스타일작업 X, 옵션 시스템만)',
  component: Card,
}

const Template: Story<CardProps> = (args) => <Card {...args} />

export const BasicCard = Template.bind({})
BasicCard.args = {
  className: '',
  children: (
    <>
      <CardHeader className="mb-4">기본 카드 제목</CardHeader>
      <CardBody>
        <p>기본 카드 바디</p>
      </CardBody>
    </>
  ),
}

BasicCard.argTypes = {
  children: {
    control: { disable: true },
  },
}

export const ImageCard = Template.bind({})
ImageCard.args = {
  className: 'h-30',
  backgroundImgUrl:
    'http://www.busan.com/nas/data/content/image/2017/06/21/20170621000109_0.jpg',
  children: (
    <>
      <CardHeader className="px-4 w-15 break-words text-white">
        유희열 미소는 천사미소
      </CardHeader>
      <CardBody className="p-4">
        <p className="text-white">이건 거의 알비급..</p>
      </CardBody>
    </>
  ),
}
ImageCard.argTypes = {
  children: {
    control: { disable: true },
  },
}
