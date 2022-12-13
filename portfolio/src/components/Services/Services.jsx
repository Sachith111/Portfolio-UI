import React from 'react';
import './Services.css';
import Glasses from '../../img/glassesimoji.png';
import Heart from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import { Card } from '../Card/Card';
import Resume from '../Services/Resume.pdf';


export const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <span>
                Lorem is dad fdc ddcdcasvf cddcdcds cddvf daddas dada
                <br />
                cddcdcds cddvfvfvf vvvvcpfpa fparas dulareate my nexat
            </span>

            <a href={Resume}  download>
            <button className='button s-button'>Download CV</button>
            </a>
           
            <div className="blur s-blur" style={{background:'#ff8ea0'}} ></div>

        </div>
        
        {/* right side */}
        <div className="cards">
            <div style={{left:'14rem'}}>
                <Card emoji={Heart} heading={'Design'} details={'Figma, Sketch, PhotoShop,Adobe,Adobe Xd,paint'}/>
            </div>

            <div style={{top:'12rem',left:'-4rem'}}>
                <Card emoji={Glasses} heading={'Developer'} details={'Html,css, Javascript,React,React-native'}/>
            </div>

            <div className="blur s-blur" style={{background:'yellow'}} ></div>


            <div style={{left:'14rem',top:'19rem'}}>
                <Card emoji={Humble} heading={'UI/UX'} details={'lorem is a afat ffsadta dala se'}/>
            </div>

        </div>
    </div>
  )
}
