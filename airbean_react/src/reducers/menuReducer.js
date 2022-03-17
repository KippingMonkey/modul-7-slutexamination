const intialState = {
  cartItems: []
}

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MENU':
      return {
          ...state,
          
      }
      
      break;
  
    default:
      break;
  }
}