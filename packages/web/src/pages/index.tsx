import React from 'react'
import {Button} from '@blog-monorepo/yg-ui'

function HomePage() {
  const BASE_BUTTON =
    'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg bg-gray-500'

  return (
    <>
      <div>Welcome to Next.js!</div>
      <Button text="화가난다아아아아아" className={BASE_BUTTON} />
    </>
  )
}

export default HomePage
