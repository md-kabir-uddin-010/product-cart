import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/product/actions";

const initialState = {
  name: "",
  category: "",
  image: "",
  price: "",
  quantity: "",
};

export default function ProductInputForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        ...state,
        price: Math.abs(state.price),
        quantity: Math.abs(parseInt(state.quantity)),
      })
    );
    setState(initialState);
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="name">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="category">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            value={state.category}
            onChange={handleChange}
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="image"
            value={state.image}
            onChange={handleChange}
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="price"
              value={state.price}
              onChange={handleChange}
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="quantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="quantity"
              value={state.quantity}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
