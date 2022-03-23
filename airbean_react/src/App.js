import './App.css';

import { Routes, Route } from 'react-router-dom';
//used to set up urls for the different view components
import { useDispatch } from 'react-redux';
//used to dispatch data to the store
import { addMenu } from './actions/menuActions';
//used with dispatch to relay an action for the dispatched data
import axios from 'axios';
//used for CRUD requests

import Landing from './views/Landing';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Status from './views/Status';
import Error from './views/Error';
//view components

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
