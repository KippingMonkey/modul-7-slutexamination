import './TotalPrice.css';
import { useSelector } from 'react-redux';

function TotalPrice (){
  const cartItems = useSelector((state) => { return state.cartReducer.cartItems })
  let totalPrice;
  const ids = cartItems.map( cartItem => cartItem.id);

  if (cartItems.length === 0 ) {
      totalPrice = 0;
  }
  else{
    const prices = cartItems.map(cartItem => cartItem.price);
    totalPrice = prices.reduce((a, b) => a + b);
  }
  let ones = 0;
  let sevens = 0;
  let pairs = 0;
  if (ids.includes(1) && ids.includes(7)) {
    ids.forEach(id => {
     id === 1 ? ones += 1 : ones = ones;
     id === 7 ? sevens += 1 : sevens = sevens;
    });
    ones === sevens ? pairs = ones : pairs = Math.min(ones, sevens);
    totalPrice -= pairs * 39;
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