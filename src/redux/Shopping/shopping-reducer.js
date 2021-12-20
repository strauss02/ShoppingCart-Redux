import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: 'Cube',
      description: 'cool cube',
      price: 15,
      image:
        'https://www.babycenter.com/ims/2014/11/US_baby-wearing-sunglasses_square.jpg.pagespeed.ce.QSv_XfXjGH.jpg',
    },
    {
      id: 2,
      title: 'baby',
      description: 'cool baby',
      price: 30,
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Purple111/v4/22/30/23/22302395-ce9d-a56a-a050-2304c1e9b0db/source/256x256bb.jpg',
    },
  ], // id, title, description, price, img
  cart: [], // id, title, description, price, img, qty
  currentItem: {
    id: 2,
    title: 'baby',
    description: 'cool baby',
    price: 30,
    image:
      'https://is5-ssl.mzstatic.com/image/thumb/Purple111/v4/22/30/23/22302395-ce9d-a56a-a050-2304c1e9b0db/source/256x256bb.jpg',
  },
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id)
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      )
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      }

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload.item,
      }

    default:
      return state
  }
}

export default shopReducer
