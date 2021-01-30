import React from 'react'
import Button from './'

export default {
  title: 'Button',
}

const BASE_BUTTON =
  'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg bg-gray-500'
const BASE_BUTTON_2 = 'py-3 px-12 font-normal  text-lg bg-gray-200'

export const Button1 = () => <Button text="니뭐ㅋ" className={BASE_BUTTON} />

export const Button2 = () => <Button text="니뭐ㅎ" className={BASE_BUTTON_2} />
