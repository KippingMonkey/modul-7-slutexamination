import './Landing.css';
import introGraphicLeft from '../assets/graphics/intro-graphic-left.svg';
import introGraphicRight from '../assets/graphics/intro-graphic-right.svg';
import airbeanLogo from '../assets/graphics/airbean-landing.svg';

function Landing () {
  return(
    <div className='landing-container'>
      <img src={introGraphicLeft} className="graphic-left"/>
      <img src={airbeanLogo} className="logo"/>
      <img src={introGraphicRight} className="graphic-right"/>
    </div>
  )
}

export default Landing;