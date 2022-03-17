import './App.css';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { addMenu } from './actions/menuActions';

import Landing from './views/Landing';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Status from './views/Status';
import Error from './views/Error';

function App() {

  const dispatch = useDispatch();

  const apiUrl = 'http://localhost:5000/api/beans'

  async function getMenu(query) {
    axios.get(query)
    .then((response) => {
      console.log('The menu', response.data.menu);
      dispatch(addMenu(response.data.menu))
    })
    .catch((error) => {
      console.log(error);
    })
  };
  getMenu(apiUrl);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={ <Landing /> } exact />
          <Route path="/menu" element={ <Menu /> } exact />
          <Route path="/cart" element={ <Cart /> } exact />
          <Route path="/status" element={ <Status />} exact />
          <Route path="*" element={ <Error />} exact />
        </Routes>
      </header>
    </div>
  );
}

export default App;
