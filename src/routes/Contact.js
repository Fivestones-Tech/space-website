import React from 'react';
import Navbar from '../../../space-website/src/components/Navbar';
import HeroImage from '../../../space-website/src/components/HeroImage';
import Footer from '../../../space-website/src/components/Footer';
import Form from '../../../space-website/src/components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact;