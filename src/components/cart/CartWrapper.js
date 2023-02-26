import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

export default function CartWrapper() {
  const carts = useSelector((state) => state.carts);

  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {/* <!-- Cart Item --> */}
          {carts?.length === 0 && (
            <p className="capitalize text-center">cart is empty</p>
          )}
          {carts?.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}

          {/* <!-- Cart Items Ends --> */}
        </div>

        {/* <!-- Bill Details --> */}
        <BillDetails />
      </div>
    </div>
  );
}
