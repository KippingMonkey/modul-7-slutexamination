import './Status.css';
import drone from '../assets/graphics/drone.svg'
import { Link } from 'react-router-dom';

function Status () {
  return(
    <div className='status-bg'>
      <div className='status-container'>
        <p className='order-no'>Ordernummer:</p>
        <img src={ drone }/>
        <div>
        <h1 className='status-header'>Din beställning är på väg!</h1>
        <p className='order-eta'>minuter</p>
        </div>
        <Link to='/'>
          <div className='confirm-btn'><p className='confirm-text'>Ok, cool!</p></div>
        </Link>
      </div>
    </div>
  )
}

export default Status;