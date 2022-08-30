import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const MostProductDetails = ({ product }) => {
  const navigate = useNavigate();

  const { _id, img, name, price, description, quantity } = product;
  const navigateToInventoryUpdate = (id) => {
    navigate(`/inventory_update/${id}`);
  };
  return (
    <div data-aos="zoom-in-up" className="mt-16 rounded shadow-lg">
      <div className="relative p-3 w-[375px] h-[500px] ">
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
          onClick={() => navigateToInventoryUpdate(_id)}
          className="text-center py-2 hover:text-white hover:bg-primary font-thin rounded-md uppercase border border-primary w-11/12 ease-in duration-500 absolute -mt-16"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default MostProductDetails;
