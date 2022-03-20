const initialState = {
  confirmation: {}
}

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