import './App.css';
import {Routes, Route} from 'react-router-dom';

import Landing from './views/Landing';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Status from './views/Status';
import Error from './views/Error';

function App() {
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
