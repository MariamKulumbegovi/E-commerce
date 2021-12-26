import * as actionTypes from './shopping-types';

export const INITIAL_STATE = {
  products: [],
  cart: [],
 
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(prod => prod.id === action.payload.id);
      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, color:item.id,  qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item,color:item.id,  qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    
    default:
      return state;
  }
};

export default ShopReducer;
