import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';



export const Intro = () => {
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am </span>
                    <span>Kiaro Shewo</span>
                    <span>Front-end Developer with high 
                        level of experience in web designing 
                        and development, producting the 
                        Quality work.
                    </span>
                  
                </div>
                <button className="button i-button">Hire me</button>

                <div className="i-icons">
                    <a href='https://github.com/'>
                    <img src={Github} alt="" />

                    </a>
                     <a href='https://www.linkedin.com/'>
                     <img src={LinkedIn} alt="" />

                    </a>
                     <a href='https://www.instagram.com/'>
                     <img src={Instagram} alt="" />

                    </a>


                </div>

            </div>

            <div className="i-right">
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={Boy} alt="" />
                    <img src={Glassesimoji} alt="" />

                    <div className='blur' style={{
                        background:'#C1F5FF',
                        top:'17rem',
                        width:'21rem',
                        height:'11rem',
                        left:'-40%',
                    }}></div>

            </div>
        <div style={{flexDirection:'row'}}>
            <div style={{top:'-5%',right:'10%'}}>
                <FloatingDiv image={Crown} txt1={'web'} txt2={'developer'}/>
            </div>
            <div style={{top:'18px',left:'10%',paddingTop:'100px'}}>
                <FloatingDiv image={Thumbup} txt1={'Best design'} txt2={'Award'}/>
            </div>

            {/* blur divs */}
            <div className='blur' style={{backgroundColor:'rgb(238 210 255)'}}>

            </div>
        </div>
         
    </div>
    )
}