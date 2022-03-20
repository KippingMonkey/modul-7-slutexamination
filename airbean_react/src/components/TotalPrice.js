import './TotalPrice.css';
import { useSelector } from 'react-redux';

function TotalPrice (){
  const cartItems = useSelector((state) => { return state.cartReducer.cartItems })
  let totalPrice;
  if (cartItems.length === 0 ) {
      totalPrice = 0;
  }
  else{
    const prices = cartItems.map(cartItem => cartItem.price);
    console.log('prices', prices);
    totalPrice = prices.reduce((a, b) => a + b);
  }

  return(
    <div className="totalPrice-container">
      <div className='priceText-container'>
        <p className="total">Total</p>
        <p className="inclusive">inkl moms + drönarleverans</p>
      </div>
      <div className='price-container'>
        <p className='price'>{ totalPrice } kr</p>
      </div>
    </div>
  )
}

export default TotalPrice;