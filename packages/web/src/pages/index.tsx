import React from 'react'
import { Button, Card, CardBody } from '@blog-monorepo/yg-ui'

function HomePage() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <Button text="화가난다아아아아아" />
      <CardBody />
      <Card
        backgroundImg={
          <img
            alt="example"
            src="http://www.busan.com/nas/data/content/image/2017/06/21/20170621000109_0.jpg"
          />
        }
      >
        haha
      </Card>
    </>
  )
}

export default HomePage
