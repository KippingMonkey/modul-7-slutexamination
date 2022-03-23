import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/rootReducer';
//holds the store for all reducers
import { BrowserRouter} from 'react-router-dom';
//allow work with browser url's to change view componentes
//by encapsulating <App/> it becomes available throughout the app
import { createStore } from 'redux';
//creates the store which holds state. Should, in most cases, be only one
import { Provider } from 'react-redux';
//provides access to the store
//by encapsulating <App/> it becomes available throughout the app


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) 

console.log(store.getState());
//shows current state/states in console


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
