import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Ams</div>
            <span>toogle</span>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experiece</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button">
                Contact us
            </button>
        </div>
    </div>
  )
}
