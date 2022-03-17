const initialState = {
  cartItems: []
}

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MENU':
      return {
          ...state,
          menuItems: action.payload
      }
      case 'SHOW_CART_CONTENT':
        return {
          ...state,
          cartItems: action.payload
        }
      
      break;
  
    default:
      return state;
  }
}

export  default cartItemReducer;