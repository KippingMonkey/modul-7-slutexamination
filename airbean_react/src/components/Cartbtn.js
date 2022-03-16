import './Cartbtn.css';
import bag from '../assets/graphics/bag.svg';
import { Link } from 'react-router-dom';
import React from 'react';

function Cartbtn () {
  return (
    <Link to='/Cart'>
      <div className='cart-btn'>
        <img src={ bag } /> 
      </div>
    <div className='qty-container'>
      <p className='qty'>8</p>
    </div>
    </Link>
  )
}

export default Cartbtn;