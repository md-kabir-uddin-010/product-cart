import {
  ADDTOCART,
  DECREASEQUANTITY,
  INCREASEQUANTITY,
  REMOVECARTITEM,
} from "./actionTypes";

// add new product on cart
export const addNewCartItem = (productObj) => {
  return {
    type: ADDTOCART,
    payload: productObj,
  };
};

// increase cart quantity
export const increaseCartQuantity = (cartId, quantity) => {
  return {
    type: INCREASEQUANTITY,
    payload: {
      id: cartId,
      quantity,
    },
  };
};

// decrease cart quantity
export const decreaseCartQuantity = (cartId, quantity) => {
  return {
    type: DECREASEQUANTITY,
    payload: {
      id: cartId,
      quantity,
    },
  };
};

// remove cart item
export const removeCartItem = (cartId) => {
  return {
    type: REMOVECARTITEM,
    payload: {
      id: cartId,
    },
  };
};
