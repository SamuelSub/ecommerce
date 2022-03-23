export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      state.map((item, index) => {
        if(item._id === action.payload._id) {
          console.log(true)
          state.splice(index, 1)
        } else {
          console.log(false)
        }
      })
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