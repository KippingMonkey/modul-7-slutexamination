import './Cart.css';
import Menu from './Menu';
import Cartbtn from '../components/Cartbtn';
import OrderCard from '../components/OrderCard';

function Cart () {
  return(
    <div className='cart-container'>
      <Cartbtn/>
      <div className='bg-container'>
        <Menu/>
      </div>
      <div className='filter'></div>
      <OrderCard/> 
    </div>
  )
}

export default Cart;