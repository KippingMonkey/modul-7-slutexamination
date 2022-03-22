import './LoadingIcon.css';
import { usePromiseTracker } from 'react-promise-tracker';
import loader from '../assets/graphics/loader.png';

const LoadingIcon = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress &&
      <div className='loader-container'>
        <img className='loader' src={ loader }/>
      </div>
    )
  }

  export default LoadingIcon;