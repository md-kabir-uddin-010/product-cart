import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  removeCartItem,
} from "../../redux/cart/actions";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../redux/product/actions";

export default function CartItem({ data }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (obj = {}) => {
    if (obj?.quantity < obj?.instock) {
      dispatch(increaseCartQuantity(obj?.id, 1));
      dispatch(decreaseProductQuantity(obj?.id, 1));
    }
  };

  const handleDecreaseQuantity = (obj = {}) => {
    if (obj?.quantity > 1) {
      dispatch(decreaseCartQuantity(obj?.id, 1));
      dispatch(increaseProductQuantity(obj?.id, 1));
    }
  };

  const handleRemoveItem = (obj = {}) => {
    dispatch(removeCartItem(obj?.id));
    dispatch(increaseProductQuantity(obj?.id, obj?.quantity));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={data?.image} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{data?.name}</h4>
          <p className="lws-cartCategory">{data?.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{data?.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleIncreaseQuantity(data)}
            className="lws-incrementQuantity"
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{data?.quantity}</span>
          <button
            onClick={() => handleDecreaseQuantity(data)}
            className="lws-decrementQuantity"
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">
            {data?.price * data?.quantity}
          </span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => handleRemoveItem(data)}
          className="lws-removeFromCart"
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
