import './Cartbtn.css';
import { useSelector} from 'react-redux';
//used to fetch the state from the given reducer
import { Link } from 'react-router-dom';
//sets internal link to another view
import bag from '../assets/graphics/bag.svg';
import React from 'react';

function Cartbtn () {
  const cartItems = useSelector((state) => { return state.cartReducer.cartItems })
  const qty = cartItems.length;
  //above shows number of items in cart
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