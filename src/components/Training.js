import React from 'react'
import Space from '../assets/astronaut-explores.png'
import Astronaut from '../assets/picture-astronaut.avif'
import './TrainingStyle.css'

import {Link} from 'react-router-dom'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Through the necessity when traveling to 
                space, we offer all inclusive 
                training for pre-flight and in-flight scenarios.</p>
            <Link to='/contact'><button className='btn'>contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Space} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Astronaut} className='img' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training