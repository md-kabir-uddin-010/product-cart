import {
  ADDTOCART,
  DECREASEQUANTITY,
  INCREASEQUANTITY,
  REMOVECARTITEM,
} from "./actionTypes";
import initialState from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // add to cart
    case ADDTOCART:
      // if the product is there then the quantity will increase.
      const findItem = state?.find((item) => item.id === action.payload.id);
      if (findItem) {
        let copyState = [...state];
        copyState?.forEach((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
        });
        return copyState;
      }

      return [...state, { ...action.payload }];

    //increase cart quantity
    case INCREASEQUANTITY:
      let copyStateForIncrease = [...state];
      copyStateForIncrease?.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantity += Math.abs(parseInt(action.payload.quantity));
        }
      });
      return copyStateForIncrease;

    // decrease cart quantity
    case DECREASEQUANTITY:
      let copyStateForDecrease = [...state];
      copyStateForDecrease?.forEach((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity <= 1) return;
          item.quantity -= Math.abs(parseInt(action.payload.quantity));
        }
      });
      return copyStateForDecrease;

    //remove cart item
    case REMOVECARTITEM:
      return state?.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartReducer;
