const initialState = {
  menuItems: []
}
//triggered in the 'App'-component; holds menu data from GET request
//data used in menu view
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