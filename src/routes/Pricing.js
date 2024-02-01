import React from 'react';
import Navbar from '../../../space-website/src/components/Navbar';
import Footer from '../../../space-website/src/components/Footer';
import HeroImage from '../../../space-website/src/components/HeroImage';
import Pricing from '../../../space-website/src/components/Pricing';

const PricingRoute = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Pricing.' text="Choose your trip." />
        <Pricing />
        <Footer/>
    </div>
  )
}

export default PricingRoute;