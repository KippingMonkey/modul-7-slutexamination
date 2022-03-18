const initialState = {
  menuItems: []
}

const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MENU':
      return {
          ...state,
          menuItems: action.payload
      }
    default:
      return state;
  }
}

export  default menuItemReducer;