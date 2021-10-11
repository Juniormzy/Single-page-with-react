import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png'
import image2 from '../images/s2.png'

function Services() {
    return (
        <div id='services'>
        <div className='s-heading'>
        <h1>Services</h1>
        <p>Text messaging, or texting, is the act</p>
      </div>
      <div className='b-container'>
            <Box image={image1} alte='Img1' button='PYTHON'/>
            <Box image={image2} alte='Img2' button='React'/>
            <Box image={image2} alte='Img3' button='Javascript'/>
            
      </div>
            
        </div>
    )
}

export default Services;
