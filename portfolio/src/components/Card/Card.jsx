import React from 'react'
import './Card.css';

export const Card = ({emoji,heading,details}) => {
  return (
    <div className='card'>
        <img src={emoji} alt=''/>
        <span>{heading}</span>
        <span style={{padding:'10px'}}>{details}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}
