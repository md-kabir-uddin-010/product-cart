import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductsContainer() {
  const products = useSelector((state) => state.products);
  return (
    <div className="productContainer" id="lws-productContainer">
      {products?.length <= 0 && (
        <p className=" capitalize text-center">no product found</p>
      )}
      {products?.map((product) => (
        <ProductItem key={product?.id} data={product} />
      ))}
    </div>
  );
}
