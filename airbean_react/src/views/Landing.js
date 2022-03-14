import './Landing.css';

import { Link } from 'react-router-dom';
import introGraphicLeft from '../assets/graphics/intro-graphic-left.svg';
import introGraphicRight from '../assets/graphics/intro-graphic-right.svg';
import airbeanLogo from '../assets/graphics/airbean-landing.svg';

function Landing () {
  return(
    <Link to="/menu">
      <div className='landing-container'>
        <img src={ introGraphicLeft } className="graphic-left"/>
        <div className='logo-container'>
          <img src={ airbeanLogo } className="logo" />
        </div>
        <img src={ introGraphicRight } className="graphic-right"/>
      </div>
    </Link>
  )
}

export default Landing;