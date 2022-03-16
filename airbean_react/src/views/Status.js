import './Status.css';
import drone from '../assets/graphics/drone.svg'
import { Link } from 'react-router-dom';

function Status () {
  return(
    <div className='status-bg'>
      <div className='status-container'>
        <p className='order-no'>Ordernummer</p>
        <img src={ drone }/>
        <h1 className='status-header'>Din beställning är på väg!</h1>
        <p className='order-eta'>13min</p>
        <Link to='/'><div className='confirm-btn'></div></Link>
      </div>
    </div>
  )
}

export default Status;