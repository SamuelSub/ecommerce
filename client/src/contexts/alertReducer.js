export const alertReducer = (state, action) => {
  switch(action.type) {
    case 'success':
      return {
        message: action.payload,
        type: 'success'
      }
    case 'warning':
      return {
        message: action.payload
      }
    case 'danger':
      return {
        message: action.payload,
        type: 'error'
      }
    case 'clear':
      return {
        message: '',
        type: ''
      }
  }
}