import * as actionTypes from './shopping-types';

export const addToCart = (itemID,color) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
     color:color
    },
  };
};

export const removeFromCart = itemID => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,

    },
  };
};

