export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'true upto40':
      return {
        ...state,
        price: state.price = 'upto40'
      }
    case 'true 40to80':
      return {
        ...state,
        price: state.price = '40to80'
      }   
    case 'true 80to120':
      return {
        ...state,
        price: state.price = '80to120'
      }
    case 'true 120to160':
      return {
        ...state,
        price: state.price = '120to160'
      }
    case 'true over160':
      return {
        ...state,
        price: state.price = 'over160'
      }
      case 'false upto40':
        return {
          ...state,
          price: state.price = 'all'
        }
      case 'false 40to80':
        return {
        ...state,
        price: state.price = 'all'
      }     
      case 'false 80to120':
        return {
        ...state,
        price: state.price = 'all'
      }
      case 'false 120to160':
        return {
        ...state,
        price: state.price = 'all'
      }
      case 'false over160':
        return {
        ...state,
        price: state.price = 'all'
      }
      case 'true adidas':
        return {
          ...state,
          brands: [...state.brands, 'adidas']
        }
      case 'true nike':
        return {
          ...state,
          brands: [...state.brands, 'nike']
        }
      case 'true under armour':
        return {
          ...state,
          brands: [...state.brands, 'under armour']
        }
      case 'true new balance':
        return {
          ...state,
          brands: [...state.brands, 'new balance']
        }
      case 'false adidas':
        return {
          ...state,
          brands: state.brands.filter(item => item !== 'adidas')
        }
      case 'false nike':
        return {
          ...state,
          brands: state.brands.filter(item => item !== 'nike')
        }
      case 'false under armour':
        return {
          ...state,
          brands: state.brands.filter(item => item !== 'under armour')
        }
      case 'false new balance':
        return {
          ...state,
          brands: state.brands.filter(item => item !== 'new balance')
        }
    default:
      return state
  }
}