import React from 'react'
import Button from '../../componets/Button'
import LandingUtili from '../../utils/LandingUtili'

const LandingPage = () => {
  return (
    <LandingUtili>

 
    <div className='bg-red-500'>
  <h1 className='sty text-[4rem]'>playfare</h1>

  <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1735327571/SkilSpark%20%286%29/WHT_Horiz._Logo_2x_mwst8n.png" alt="" />

  <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1735327484/3c499517bc106130c733eb5c4c6549ec_wcp5mq.jpg" alt="" />

  <Button className="bg-yellow-500">click me</Button>
    </div>
    </LandingUtili>
  )
}

export default LandingPage
