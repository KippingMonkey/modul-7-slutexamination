const initialCartState = {
  cartItems: []
}

const cartItemReducer = (cartState = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
    return {
        ...cartState,
        cartItem: action.payload
    }
    default:
      return cartState;
  }
}

export  default cartItemReducer;