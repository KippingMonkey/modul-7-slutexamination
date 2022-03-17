import './App.css';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';

import Landing from './views/Landing';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Status from './views/Status';
import Error from './views/Error';

function App() {

  const apiUrl = 'http://localhost:5000/api/beans'

  let data = getMenu(apiUrl);

  async function getMenu(query) {
    axios.get(query)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  };

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
