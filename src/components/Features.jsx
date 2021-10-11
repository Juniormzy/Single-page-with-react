import React from 'react';
import featureimage from '../images/image2.png';

function Features() {
    return (
        <div id='features'>
            <div className='features-model'>
                <img src={featureimage} alt='feature-image'/>
            </div>
            <div className='features-text'>
                <h2>Features</h2>
                <h3>This Application <span>Software </span>is art</h3>
                <p>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters</p>
                <button>view More</button>
            </div>
            
        </div>
    )
}

export default Features;
