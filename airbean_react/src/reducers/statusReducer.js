const initialState = {
  confirmation: {}
}
//triggered in the 'Orderbtn'-component; holds orderNr & eta from POST request
//data used in status view
const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONFIRMATION':
      return {
          ...state,
          confirmation: action.payload
      }
    default:
      return state;
  }
}

export  default statusReducer;