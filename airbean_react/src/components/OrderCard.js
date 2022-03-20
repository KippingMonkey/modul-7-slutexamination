import './OrderCard.css';
import Orderbtn from './Orderbtn';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
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


  if (cartItems.length === 0) {
    orders = <h2>Din varukorg är tom!</h2>
  }
  else{
    orders = uniqueCartItems.map((cartItem) => {
            return <CartItem cartItem={ cartItem } key={ cartItem.id } />
          })
  }

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