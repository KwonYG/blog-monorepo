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
Button1.args = { className: '', children: '알비 굿' }

export const Button2 = Template.bind({})
Button2.args = { className: '', children: '니뭐ㅎ' }
