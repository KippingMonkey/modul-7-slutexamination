//triggers the statusReducer
export const addConfirmation = (confirmation) => {
  return {
    type: 'ADD_CONFIRMATION',
    payload: confirmation
  }
}