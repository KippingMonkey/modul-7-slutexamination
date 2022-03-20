import './CartItem.css';
import arrowUp from '../assets/graphics/arrow-up.svg';
import arrowDown from '../assets/graphics/arrow-down.svg';
import {useSelector} from 'react-redux';



function CartItem (props){
  const cartItems = useSelector((state) => { return state.cartReducer.cartItems })
  let qty = 0;

  cartItems.forEach(cartItem => {
    cartItem.id === props.cartItem.id ? qty += 1 : qty = qty;
  });

  console.log('cartitemcontent', props)
  return(
    <div className="cartItem-container">
      <div className='cartProduct-container'>
        <p className="cartItem-title">{ props.cartItem.title }</p>
        <p className="cartItem-price">{ props.cartItem.price } kr</p>
      </div>
      <div className='counter-container'>
        <img className='add-arrow' src={ arrowUp }/>
        <p className='count'>{ qty }</p>
        <img className='minus-arrow' src={ arrowDown }/>
      </div>
    </div>
  )
}

export default CartItem;