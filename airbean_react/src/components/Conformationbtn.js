import { clearCart } from '../actions/cartActions';
//used with dispatch to relay an action for the dispatched data
import { useDispatch } from 'react-redux';
//used to dispatch data to the store

function Conformationbtn(){

   const dispatch = useDispatch();

   function emptyCart () {
      const clearedCart = [];
      dispatch(clearCart(clearedCart));
   }
   //above sends an empty array to clear the cart
  return(
     <div onClick={ emptyCart } className='confirm-btn'>
        <p className='confirm-text'>Ok, cool!</p>
     </div>
  )
}

export default Conformationbtn;