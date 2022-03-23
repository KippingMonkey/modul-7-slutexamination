import './Error.css';
import gif from '../assets/graphics/7iJR.gif';
import { Link } from 'react-router-dom';

function Error () {
  return(
    <div>
      <Link to='/'>
        <img src={ gif }/>
      </Link>
      <p className='cred'>This lovely gif is from 
      <a href='https://gifer.com/en/' target="_blank">gifer.com</a> </p>
    </div>
  )
}

export default Error;