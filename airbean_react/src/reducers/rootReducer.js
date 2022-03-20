import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import statusReducer from './statusReducer';

export default combineReducers({
  menuReducer,
  cartReducer,
  statusReducer
})