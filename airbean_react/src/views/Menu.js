import './Menu.css';
import { useSelector } from 'react-redux';
//used to fetch the state from the given reducer
import graphicsTop from '../assets/graphics/graphics-header.svg'
import graphicsBotton from '../assets/graphics/graphics-footer.svg'
import MenuItem from '../components/MenuItem';
import Cartbtn from '../components/Cartbtn';

function Menu () {
const menuItems = useSelector((state) => { return state.menuReducer.menuItems })
console.log('menuContent', menuItems)
  return(
    <div className="menu-container">
      <img src={ graphicsTop} />
      <div className='menu'>
        <h1 className='header'>Meny</h1>
        { menuItems.map((menuItem) => {
            return <MenuItem menuItem={ menuItem } key={ menuItem.id } />
          })}
      </div>
      <img src={ graphicsBotton } />
      <Cartbtn/>
    </div>
  )
}

export default Menu;