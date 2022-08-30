import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const InventoryUpdate = () => {
  const { id } = useParams();
  const [products, setProducts] = useProducts();
  const [single, setSingle] = useState([]);
  const { _id, img, name, price, description, quantity, supplier } = single;
  const url = `http://localhost:5000/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setSingle(data));

  const handleDelivered = () => {
    const url = `http://localhost:5000/deliver/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(updateItem)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    setProducts(
      products.map((product) =>
        product._id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  return (
    <div className="p-16">
      <div className="w-11/12 mx-auto shadow-lg rounded-lg grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-x-5">
        <div>
          <img className="w-8/12 mx-auto my-auto" src={img} alt="" />
        </div>
        <div className="pt-16 p-4">
          <p className="text-secondary font-bold text-2xl">
            Product Name: {name}
          </p>
          <p className="pb-3 text-black font-thin text-xs">Product ID: {_id}</p>
          <p className="text-black">
            Product Price: <b>{price}</b>
          </p>
          <p className="text-black">
            Product Quantity: <b>{quantity}</b>
          </p>
          <p className="text-black">Product Supplier: {supplier}</p>
          <p className="font-thin text-black">Product Details: {description}</p>

          <div className="pt-3">
            <button
              onClick={() => handleDelivered()}
              className="text-primary border-primary border rounded-md w-40 p-2 cursor-pointer hover:bg-primary hover:text-white ease-in duration-300"
            >
              Deliver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryUpdate;
