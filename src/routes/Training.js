import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Training from '../components/Training'

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