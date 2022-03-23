const initialState = {
  cartItems: []
}
//ADD_ITEM_TO_CART triggered in the 'Menu'-component; holds array with cart items (adds item)
//data used in 'OrderCard'-component & 'Cartbtn'-component
//REMOVE_ITEM_FROM_CART triggered in the 'CartItem'-component; holds array with cart items (removes item)
//data used in 'OrderCard'-component & 'Cartbtn'-component
//CLEAR_CART triggered in the 'Status'-view; holds array with cart items (clears array)
//data used in 'OrderCard'-component & 'Cartbtn'-component
const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
    return {
        ...state,
        cartItems: [...state.cartItems,
          {
            id: action.payload.id,
            title: action.payload.title,
            desc:action.payload.desc,
            price: action.payload.price
          } 
        ]
    }
    case 'REMOVE_ITEM_FROM_CART':
    return {
        ...state,
        cartItems:action.payload
    }
    case 'CLEAR_CART':
    return {
        ...state,
        cartItems:action.payload
    }
    default:
      return state;
  }
}

export  default cartItemReducer;