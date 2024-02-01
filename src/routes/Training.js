import React from 'react'
import Navbar from '../../../space-website/src/components/Navbar'
import Footer from '../../../space-website/src/components/Footer'
import HeroImage from '../../../space-website/src/components/HeroImage'
import Training from '../../../space-website/src/components/Training'

const TrainingRoute = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training' />
        <Training />
        <Footer />
    </div>
  )
}

export default TrainingRoute;