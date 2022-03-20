const initialState = {
  cartItems: []
}

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
    return {
        ...state,
        cartItems: [...state.cartItems,
          {
            cartItemId: state.cartItems.length + 1,
            id: action.payload.id,
            title: action.payload.title,
            desc:action.payload.desc,
            price: action.payload.price
          } 
        ]
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