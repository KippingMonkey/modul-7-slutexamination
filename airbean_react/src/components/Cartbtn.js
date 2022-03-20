import './Cartbtn.css';
import bag from '../assets/graphics/bag.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector} from 'react-redux';

function Cartbtn () {
  const cartItems = useSelector((state) => { return state.cartReducer.cartItems })
  const qty = cartItems.length;
  return (
    <Link to='/Cart'>
      <div className='cart-btn'>
        <img src={ bag } /> 
      </div>
    <div className='qty-container'>
      <p className='qty'>{ qty }</p>
    </div>
    </Link>
  )
}

export default Cartbtn;