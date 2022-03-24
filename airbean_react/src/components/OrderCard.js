import './OrderCard.css';
import { Link } from 'react-router-dom';
//sets internal link to another view
import { useSelector } from 'react-redux';
//used to fetch the state from the given reducer
import Orderbtn from './Orderbtn';
import CartItem from './CartItem';
import TotalPrice from './TotalPrice';

function OrderCard () {
  const cartItems = useSelector((state) => { return state.cartReducer.cartItems })
  let orders;

  const uniqueCartItems = Array.from(new Set(cartItems.map(cartItem => cartItem.id)))
                          .map(id => {
                            return {
                              id: id,
                              title: cartItems.find(cartItem => cartItem.id === id).title,
                              price: cartItems.find(cartItem => cartItem.id === id).price
                            };
                          });
  //above maps over cartItems and makes a new array (uniqueCartItems) with distinct content

  if (cartItems.length === 0) {
    orders = <h2>Din varukorg är tom!</h2>
  }
  else{
    orders = uniqueCartItems.map((cartItem) => {
            return <CartItem cartItem={ cartItem } key={ cartItem.id } />
          })
  }
  //above checks for content i cart and displays one thing when empty and another when there are items in it

  return (
    <div className='card'>
      <h1 className='orderCard-header'>Din beställning</h1>
      <div className='arrow'></div>
      <div className='order-container'>
        { orders }
      </div>
      <div className='total-container'>
        <TotalPrice/>
      </div>
      <Link to='/status'><Orderbtn/></Link> 
    </div>
  )

}

export default OrderCard