import './OrderCard.css';
import Orderbtn from './Orderbtn';
import { Link } from 'react-router-dom';

function OrderCard () {
  return (
    <div className='card'>
      <h1 className='header'>Din beställning</h1>
      <div className='arrow'></div>
      <Link to='/status'><Orderbtn/></Link> 
    </div>
  )

}

export default OrderCard