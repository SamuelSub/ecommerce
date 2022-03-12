export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'true upto40':
      return [
        ...state,
        state[0]['price'] = 'upto40'
      ]
    case 'true 40to80':
      return [
        ...state,
        state[0]['price'] = '40to80'
      ]      
    case 'true 80to120':
      return [
        ...state,
        state[0]['price'] = '80to120'
      ]
    case 'true 120to160':
      return [
        ...state,
        state[0]['price'] = '120to160'
      ]
    case 'true over160':
      return [
        ...state,
        state[0]['price'] = 'over160'
      ]
      case 'false upto40':
        return [
          ...state,
          state[0]['price'] = 0
        ]
      case 'false 40to80':
        return [
          ...state,
          state[0]['price'] = 0
        ]      
      case 'false 80to120':
        return [
          ...state,
          state[0]['price'] = 0
        ]
      case 'false 120to160':
        return [
          ...state,
          state[0]['price'] = 0
        ]
      case 'false over160':
        return [
          ...state,
          state[0]['price'] = 0
        ]
    default:
      return state
  }
}