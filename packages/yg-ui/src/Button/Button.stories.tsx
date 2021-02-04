import React from 'react'
import Button from './'
import { ButtonProps } from './Button.type'
import { Story } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
}

const BASE_BUTTON =
  'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg bg-gray-500'
const BASE_BUTTON_2 = 'py-3 px-12 font-normal  text-lg bg-gray-200'

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Button1 = Template.bind({})
Button1.args = { text: '알비 바보', className: BASE_BUTTON }

export const Button2 = Template.bind({})
Button2.args = { text: '니뭐ㅎ', className: BASE_BUTTON_2 }
