import './OrderCard.css';
import Orderbtn from './Orderbtn';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';

function OrderCard () {
  const cartItems = useSelector((state) => { return state.cartItems })
  let orders;
  console.log('CARTITEM: ', cartItems)

  // if (cartItems.lenght === 0) {
  //   orders = <h2>No orders yet!</h2>
  // }
  // else{
  //   orders = cartItems.map((cartItem) => {
  //           return <CartItem cartItem={ cartItem } key={ cartItem.id } />
  //         })
  // }

  return (
    <div className='card'>
      <h1 className='header'>Din beställning</h1>
      <div className='arrow'></div>
      <div className='order-container'>{ orders }</div>
      <Link to='/status'><Orderbtn/></Link> 
    </div>
  )

}

export default OrderCard