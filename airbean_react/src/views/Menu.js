import './Menu.css';

import { useSelector, useDispatch } from 'react-redux';

import graphicsTop from '../assets/graphics/graphics-header.svg'
import graphicsBotton from '../assets/graphics/graphics-footer.svg'

import MenuItem from '../components/MenuItem';
import Cartbtn from '../components/Cartbtn';

function Menu () {
const menuItems = useSelector((state) => { return state.menuItems })
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