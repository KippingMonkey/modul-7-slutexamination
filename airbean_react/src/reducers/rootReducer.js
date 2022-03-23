import { combineReducers } from 'redux';
//allows store to use multiple reducers that hold separate states
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import statusReducer from './statusReducer';
//available reducers
export default combineReducers({
  menuReducer,
  cartReducer,
  statusReducer
})