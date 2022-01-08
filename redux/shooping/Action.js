import * as actionTypes from './Types';


export const addToCart = (itemID) => {
  return{
      type: actionTypes.ADD_TO_CART,
      payload: {
          id: itemID,
      },
  };
};

export const removeFromCart = (itemID) => {
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
};

export const adjustItemQty = (itemID, qty) => {
  return{
      type: actionTypes.ITEM_QTY,
      payload: {
      itemID,
      qty,

      }
  }
}


export const loadCurrentItem = (item) => {
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: {
        item,
        }
    }
}

export const setProducts = (products) => {
    return{
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    };
};