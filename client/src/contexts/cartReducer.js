export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      let newItem;
      let addQuantity = false;
      state.map((product, index) => {
        if(product._id === action.payload._id) {
          state.splice(index, 1)
          addQuantity = true;
          let count = product.quantity + 1
          let newPrice = product.price + action.payload.price;
          newItem = {
            _id: action.payload._id,
            imageLink: action.payload.imageLink,
            name: action.payload.name,
            price: newPrice,
            quantity: count,
            description: action.payload.description
          }
        } else {
          console.log(false)
        }
      })
      return [
        ...state,
        addQuantity ? newItem : action.payload
      ]
    case 'remove':
      return (
        state.filter(item => item._id !== action.payload)
      )
    default:
      return state
  }
}