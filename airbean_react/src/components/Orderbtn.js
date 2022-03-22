import './Orderbtn.css';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { addConfirmation} from '../actions/statusActions';
import { trackPromise } from 'react-promise-tracker';

function Orderbtn () {
  const dispatch = useDispatch()

  async function postOrder() {
    trackPromise(
    axios.post('http://localhost:5000/api/beans')
    .then((response) => {
      console.log('confirmation', response.data);
      dispatch(addConfirmation(response.data))
    })
    .catch((error) => {
      console.log(error);
    })
    )
  };
  return(
    <div onClick={ postOrder } className='order-btn'>
      <p className='btn-text'>Take my money!</p>
    </div>
  )
}

export default Orderbtn;