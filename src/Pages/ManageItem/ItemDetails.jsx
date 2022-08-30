import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useProducts from "../../Hooks/useProducts";

const ItemDetails = ({ product }) => {
  const { img, name, price, description, quantity } = product;
  const [products, setProducts] = useProducts();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div>
      <div data-aos="zoom-in-up" className="mt-16 rounded shadow-lg">
        <div className="relative p-5 w-[375px] h-[500px] ">
          <LazyLoadImage className="w-48 h-48 mx-auto" src={img} />
          <div className="text-black">
            <p className="text-secondary font-bold text-xl">{name}</p>
            <p className="mt-3">Price: {price}</p>
            <p className="mt-2">Quantity: {quantity}</p>
            <p className="mt-3">{description}</p>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <button
            onClick={() => handleDelete(product._id)}
            className="text-center py-2 hover:text-white hover:bg-primary font-thin rounded-md uppercase border border-primary w-11/12 ease-in duration-500 absolute -mt-16"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
