//below all triggers the 'CartReducer'

export const addToCart = (cartItem) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem
  }
}

export const removeFromCart = (cartItems) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: cartItems
  }
}

export const clearCart = (cartItems) => {
  return {
    type: 'CLEAR_CART',
    payload: cartItems
  }
}