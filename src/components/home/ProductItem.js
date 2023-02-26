import React from "react";
import { useDispatch } from "react-redux";
import { addNewCartItem } from "../../redux/cart/actions";
import { decreaseProductQuantity } from "../../redux/product/actions";

export default function ProductItem({ data }) {
  const dispatch = useDispatch();

  const handleAddToCart = (productObj = {}) => {
    dispatch(
      addNewCartItem({
        ...productObj,
        instock: productObj.quantity,
        quantity: 1,
      })
    );
    dispatch(decreaseProductQuantity(productObj.id, 1));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={data?.image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{data?.name}</h4>
        <p className="lws-productCategory">{data?.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{data?.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{data?.quantity}</span>
          </p>
        </div>
        <button
          onClick={() => handleAddToCart(data)}
          className="lws-btnAddToCart"
          disabled={data?.quantity <= 0 ? true : false}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
