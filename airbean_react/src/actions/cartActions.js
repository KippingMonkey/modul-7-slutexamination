export const addToCart = (cartItem) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem
  }
}

export const clearCart = (cartItems) => {
  return {
    type: 'CLEAR_CART',
    payload: cartItems
  }
}