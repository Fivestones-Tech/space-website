import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyle.css'


import spaceVideo from '../assets/space.mp4';



export const Video = () => {
  return (
    <div className='hero'>

      {/* Commenting out the video */}
      <video autoPlay loop muted id='video'>
        <source src={spaceVideo} type='video/mp4' />
      </video>

      <div className='content'>
        <h1>Gallery. Travel.</h1>
        <p>World's first civilian space travel.</p>

      <div className='hero-btn'>
      <Link to='/training' className='btn'>Training</Link>
      <Link to='/contact' className='btn btn-light'>Contact</Link>
      </div>
      </div>
    </div>
  );
};

export default Video;


