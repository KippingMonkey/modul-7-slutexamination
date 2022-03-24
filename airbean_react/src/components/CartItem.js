import './CartItem.css';
import { addToCart } from '../actions/cartActions';
//used to dispatch data to the store
import { removeFromCart } from '../actions/cartActions';
//used to dispatch data to the store
import { useSelector, useDispatch } from 'react-redux';
//used to fetch the state from the given reducer
//used to dispatch data to the store
import arrowUp from '../assets/graphics/arrow-up.svg';
import arrowDown from '../assets/graphics/arrow-down.svg';

function CartItem (props){
  const cartItems = useSelector((state) => { return state.cartReducer.cartItems })
  const dispatch = useDispatch();
  let qty = 0;

  cartItems.forEach(cartItem => {
    cartItem.id === props.cartItem.id ? qty += 1 : qty = qty;
  });
  //above adds one to quantity...
  function addCartItem () {
    dispatch(addToCart(props.cartItem));
  }
  //...and sends updated qty to store
  function removeCartItem () {
    const index = cartItems.findIndex(cartItem => cartItem.id === props.cartItem.id);
    if (index > -1) {
      const items = [...cartItems];
      items.splice(index, 1);
      console.log('splicedArr', cartItems);
      dispatch(removeFromCart(items)); 
    }
  }
  //above finds the index of clicked item and remove one from that quantity
  
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