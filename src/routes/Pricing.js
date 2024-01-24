import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Pricing from '../components/Pricing';

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