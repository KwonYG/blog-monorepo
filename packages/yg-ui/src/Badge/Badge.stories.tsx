import React from 'react'
import Badge from './'
import { BadgeProps } from './Badge.type'
import { Story } from '@storybook/react'

export default {
  title: 'Badge',
  component: Badge,
}

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const BasicBadge = Template.bind({})
BasicBadge.args = {
  className: '',
  children: 'bar 뱃지',
}
