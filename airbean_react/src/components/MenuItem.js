import './MenuItem.css';
import add from '../assets/graphics/add.svg';

function MenuItem () {
  return(
    <div className="menu-item-container">
        <div className="btn-container">
          <button className="add-btn"></button>
        </div>
        <div className="product-container">
          <p className="title">Bryggkaffe</p>
          <p className="description">Bryggt på månandens bönor</p>
        </div>
        <p className="price">56kr</p>
    </div>
  )
}

export default MenuItem;