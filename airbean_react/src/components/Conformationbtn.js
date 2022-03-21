import { clearCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

function Conformationbtn(){

   const dispatch = useDispatch();

   function emptyCart () {
      const clearedCart = [];
      dispatch(clearCart(clearedCart));
   }
  return(
     <div onClick={ emptyCart } className='confirm-btn'>
        <p className='confirm-text'>Ok, cool!</p>
     </div>
  )
}

export default Conformationbtn;