import {
  ADDPRODUCT,
  DECREASEPRODUCTQUANTITY,
  INCREASEPRODUCTQUANTITY,
} from "./actionTypes";

//create new product
export const createProduct = (payload) => {
  return {
    type: ADDPRODUCT,
    payload,
  };
};

//increse product quantity
export const increaseProductQuantity = (productId, productQuantity) => {
  return {
    type: INCREASEPRODUCTQUANTITY,
    payload: {
      id: productId,
      quantity: productQuantity,
    },
  };
};

//decrese product quantity
export const decreaseProductQuantity = (productId, productQuantity) => {
  return {
    type: DECREASEPRODUCTQUANTITY,
    payload: {
      id: productId,
      quantity: productQuantity,
    },
  };
};
