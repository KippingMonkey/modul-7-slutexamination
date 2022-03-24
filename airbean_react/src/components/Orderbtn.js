import './Orderbtn.css';
import { useDispatch} from 'react-redux';
//used to dispatch data to the store
import { addConfirmation} from '../actions/statusActions';
//used with dispatch to relay an action for the dispatched data
import { trackPromise } from 'react-promise-tracker';
//used to track loading state which decides when to show or hide the loader
import axios from 'axios';
//used for CRUD requests

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
  //above send POST-request to get ETA and OrderNo in response
  
  return(
    <div onClick={ postOrder } className='order-btn'>
      <p className='btn-text'>Take my money!</p>
    </div>
  )
}

export default Orderbtn;