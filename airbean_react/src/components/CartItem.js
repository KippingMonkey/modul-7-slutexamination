import './CartItem.css';
import arrowUp from '../assets/graphics/arrow-up.svg';
import arrowDown from '../assets/graphics/arrow-down.svg';
import { addToCart } from '../actions/cartActions';
import { removeFromCart } from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

function CartItem (props){
  const cartItems = useSelector((state) => { return state.cartReducer.cartItems })
  const dispatch = useDispatch();
  let qty = 0;

  cartItems.forEach(cartItem => {
    cartItem.id === props.cartItem.id ? qty += 1 : qty = qty;
  });

  function addCartItem () {
    dispatch(addToCart(props.cartItem));
  }
  function removeCartItem () {
    const index = cartItems.findIndex(cartItem => cartItem.id === props.cartItem.id);
    console.log('index',index)
    if (index > -1) {
      const items = [...cartItems];
      items.splice(index, 1);
      console.log('splicedArr', cartItems);
      dispatch(removeFromCart(items)); 
    }
  }

  console.log('cartitemcontent', props)
  return(
    <div className="cartItem-container">
      <div className='cartProduct-container'>
        <p className="cartItem-title">{ props.cartItem.title }</p>
        <p className="cartItem-price">{ props.cartItem.price } kr</p>
      </div>
      <div className='counter-container'>
        <img onClick={ addCartItem } className='add-arrow' src={ arrowUp }/>
        <p className='count'>{ qty }</p>
        <img onClick={ removeCartItem } className='minus-arrow' src={ arrowDown }/>
      </div>
    </div>
  )
}

export default CartItem;