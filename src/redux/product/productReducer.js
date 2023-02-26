import {
  ADDPRODUCT,
  DECREASEPRODUCTQUANTITY,
  INCREASEPRODUCTQUANTITY,
} from "./actionTypes";
import initialState from "./initialState";

//id genaretor
const nextId = (products = []) => {
  let Id = products.reduce((maxId, product) => Math.max(product.id, maxId), 0);
  return Id + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    //create new product
    case ADDPRODUCT:
      return [...state, { id: nextId(state), ...action.payload }];

    //increase product quantity
    case INCREASEPRODUCTQUANTITY:
      let copyStateForIncrease = [...state];
      copyStateForIncrease?.forEach((item) => {
        if (item.id === action.payload.id) {
          if (Math.abs(action.payload.quantity) < 0) return;
          item.quantity += Math.abs(parseInt(action.payload.quantity));
        }
      });
      return copyStateForIncrease;

    //decrease produtct quentity
    case DECREASEPRODUCTQUANTITY:
      let copyStateForDecrease = [...state];
      copyStateForDecrease?.forEach((item) => {
        if (item.id === action.payload.id) {
          if (
            item.quantity <= 0 ||
            item.quantity < Math.abs(parseInt(action.payload.quantity))
          )
            return;
          item.quantity -= Math.abs(parseInt(action.payload.quantity));
        }
      });
      return copyStateForDecrease;

    default:
      return state;
  }
};

export default productReducer;
