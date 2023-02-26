import React from "react";
import ProductInputForm from "./ProductInputForm";
import ProductsContainer from "./ProductsContainer";

export default function ProductWrapper() {
  return (
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <ProductsContainer />
      {/* <!-- products container ends --> */}
      <div>
        {/* <!-- Product Input Form --> */}
        <ProductInputForm />
        {/* <!-- Product Input Form Ends --> */}
      </div>
    </div>
  );
}
