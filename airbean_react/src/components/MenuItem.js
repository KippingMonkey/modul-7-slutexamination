import './MenuItem.css';
import { useDispatch } from 'react-redux';
//used to dispatch data to the store
import { addToCart } from '../actions/cartActions';
//used with dispatch to relay an action for the dispatched data
import add from '../assets/graphics/add.svg';


function MenuItem ( props ) {
const dispatch = useDispatch();
console.log('MenuItem: ', props.menuItem);

function sendToCart (){
  dispatch(addToCart(props.menuItem))
  //sends cartItem to cart when add-btn is clicked
}
  return(
    <div className="menu-item-container">
        <div className="btn-container">
          <div onClick={ sendToCart } className="add-btn"><img src={ add } className="add"/></div>
        </div>
        <div className="product-container">
          <p className="title">{ props.menuItem.title }</p>
          <p className="description">{ props.menuItem.desc }</p>
        </div>
        <p className="price">{ props.menuItem.price } kr</p>
    </div>
  )
}

export default MenuItem;