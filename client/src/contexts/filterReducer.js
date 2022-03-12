export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'true Up to 40':
      return [
        ...state,
        state[0]['price'].range0to40 = true
      ]
    case 'true 40-80':
      return [
        ...state,
        state[0]['price'].range40to80 = true
      ]      
    case 'true 80-120':
      return [
        ...state,
        state[0]['price'].range80to120 = true
      ]
    case 'true 120-160':
      return [
        ...state,
        state[0]['price'].range120to160 = true
      ]
    case 'true Over 160':
      return [
        ...state,
        state[0]['price'].rangeOver160 = true
      ]
      case 'false Up to 40':
        return [
          ...state,
          state[0]['price'].range0to40 = false
        ]
      case 'false 40-80':
        return [
          ...state,
          state[0]['price'].range40to80 = false
        ]      
      case 'false 80-120':
        return [
          ...state,
          state[0]['price'].range80to120 = false
        ]
      case 'false 120-160':
        return [
          ...state,
          state[0]['price'].range120to160 = false
        ]
      case 'false Over 160':
        return [
          ...state,
          state[0]['price'].rangeOver160 = false
        ]
    default:
      return state
  }
}