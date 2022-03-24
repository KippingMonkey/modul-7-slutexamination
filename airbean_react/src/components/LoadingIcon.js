import './LoadingIcon.css';
import { usePromiseTracker } from 'react-promise-tracker';
//uses the state tracked in the POST request triggered in "Orderbtn"-component
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