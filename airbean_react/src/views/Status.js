import './Status.css';
import drone from '../assets/graphics/drone.svg'
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import Conformationbtn from '../components/Conformationbtn';
import LoadingIcon from '../components/LoadingIcon';



function Status () {
  const order = useSelector((state) => { return state.statusReducer })

  return(
    <div className='status-bg'>
      <div className='status-container'>
        <p className='order-no'>Ordernummer: { order.confirmation.orderNr }</p>
        <img src={ drone }/>
        <div>
        <h1 className='status-header'>Din beställning är på väg!</h1>
        <p className='order-eta'><span className='minutes'>{order.confirmation.eta }</span> minuter</p>
        </div>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <Conformationbtn/> 
        </Link>
        <LoadingIcon/>
      </div>
    </div>
  )
}

export default Status;