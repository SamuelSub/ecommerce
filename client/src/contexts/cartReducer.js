export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        action.payload
      ]
    case 'remove':
      return (
        state.filter(item => item._id !== action.payload)
      )
    default:
      return state
  }
}