import './MenuItem.css';
import add from '../assets/graphics/add.svg';
import { Link } from 'react-router-dom';

function MenuItem () {
  return(
    <div className="menu-item-container">
        <div className="btn-container">
          <Link to="/cart">
            <div className="add-btn"><img src={ add } className="add"/></div>
          </Link> 
        </div>
        <div className="product-container">
          <p className="title">Bryggkaffe</p>
          <p className="description">Bryggt på månandens bönor</p>
        </div>
        <p className="price">49kr</p>
    </div>
  )
}

export default MenuItem;