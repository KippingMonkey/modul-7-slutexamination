//triggers the menuReducer
export const addMenu = (menuItems) => {
  return {
    type: 'ADD_MENU',
    payload: menuItems
  }
}


