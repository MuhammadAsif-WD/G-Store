import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MostProductDetails = ({ product }) => {
  const { img, name, price, description, quantity } = product;
  return (
    <div data-aos="zoom-in-up" className="mt-16 p-3 rounded card_shadow">
      <LazyLoadImage className="w-48 h-48 mx-auto" src={img} />
      <p className="text-black">
        <p className="text-secondary font-bold text-xl">{name}</p>
        <p className="mt-3">Price: {price}</p>
        <p className="mt-2">Quantity: {quantity}</p>
        <p className="mt-3">{description}</p>
      </p>
      <button className="mt-5 w-full py-2 hover:text-white hover:bg-primary font-thin rounded-md uppercase border border-primary ease-in duration-300">
        Update
      </button>
    </div>
  );
};

export default MostProductDetails;
