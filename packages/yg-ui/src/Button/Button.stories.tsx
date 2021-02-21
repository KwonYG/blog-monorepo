import React from 'react'
import Button from './'
import { ButtonProps } from './Button.type'
import { Story } from '@storybook/react'

export default {
  title: 'Button(테스트용)',
  component: Button,
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Button1 = Template.bind({})
Button1.args = { text: '알비 굿', className: '' }

export const Button2 = Template.bind({})
Button2.args = { text: '니뭐ㅎ', className: '' }
