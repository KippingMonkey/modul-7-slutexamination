import './CartItem.css';
import arrowUp from '../assets/graphics/arrow-up.svg';
import arrowDown from '../assets/graphics/arrow-down.svg';



function CartItem (props){
  console.log('cartitemcontent', props)
  return(
    <div className="cartItem-container">
      <div className='cartProduct-container'>
        <p className="cartItem-title">{ props.cartItem[0].title }</p>
        <p className="cartItem-price">{ props.cartItem[0].price } kr</p>
      </div>
      <div className='counter-container'>
        <img className='add-arrow' src={ arrowUp }/>
        <p className='count'>4</p>
        <img className='minus-arrow' src={ arrowDown }/>
      </div>
    </div>
  )
}

export default CartItem;