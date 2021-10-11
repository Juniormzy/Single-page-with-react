import React from 'react';
import Navbar from './Navbar';
import CV from '../images/cv.pdf';


function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1>It's a<span>REACTJS</span>Website</h1>
                <p className='details'>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters</p>
                <div className='header-btns'>
                    <a href="mailto:juniormzy@gmail.com" className='cv-btn' >Hire Me</a>
                    <a href={CV} className='cv-btn1'>Download Cv</a>
                </div>
            </div>
            <div className='arrow'></div>
        </div>
    )
}

export default Header;
