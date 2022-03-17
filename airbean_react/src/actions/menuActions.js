export const addMenu = (menuItems) => {
  return {
    type: 'ADD_MENU',
    payload: menuItems
  }
}

export const allCartItems = (cartItems) => {
  return {
    type: 'SHOW_CART_CONTENT',
    payload: cartItems
  }
}

export const addToCart = (cartItem) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem
  }
}

