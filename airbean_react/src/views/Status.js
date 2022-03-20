import './Status.css';
import drone from '../assets/graphics/drone.svg'
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';


function Status () {

  const order = useSelector((state) => { return state.statusReducer })
  console.log('last', order.confirmation.eta);

  return(
    <div className='status-bg'>
      <div className='status-container'>
        <p className='order-no'>Ordernummer: { order.confirmation.orderNr }</p>
        <img src={ drone }/>
        <div>
        <h1 className='status-header'>Din beställning är på väg!</h1>
        <p className='order-eta'>{order.confirmation.eta } minuter</p>
        </div>
        <Link to='/'>
          <div className='confirm-btn'><p className='confirm-text'>Ok, cool!</p></div>
        </Link>
      </div>
    </div>
  )
}

export default Status;