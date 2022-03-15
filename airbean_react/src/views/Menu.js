import './Menu.css';

import graphicsTop from '../assets/graphics/graphics-header.svg'
import graphicsBotton from '../assets/graphics/graphics-footer.svg'

import MenuItem from '../components/MenuItem';

function Menu () {
  return(
    <div className="menu-container">
      <img src={ graphicsTop} />
      <div className='menu'>
        <h1 className='header'>Meny</h1>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
      <img src={ graphicsBotton } />
    </div>
  )
}

export default Menu;