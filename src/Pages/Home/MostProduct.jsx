import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import MostProductDetails from "./MostProductDetails";

const MostProduct = () => {
  const [products] = useProducts();
  return (
    <div className="2xl:m-32 xl:m-24 lg:m-20 m-1">
      <h4 className="text-black text-center font-semibold text-sm uppercase">
        Our Product
      </h4>
      <h4 className="text-secondary text-center font-semibold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-3xl uppercase mt-5">
        Our best Laptop
      </h4>

      <div className="flex flex-wrap  gap-x-8 gap-y-50 mt-16">
        {products.slice(0, 6).map((product) => (
          <MostProductDetails
            key={product._id}
            product={product}
          ></MostProductDetails>
        ))}
      </div>
      <Link to="/manage">
        <p className="text-center">
          <button
            data-aos="zoom-out"
            className="mt-10 font-bold text-white bg-primary hover:bg-primary/90 ease-in duration-200 py-4 px-8 rounded uppercase"
          >
            See more
          </button>
        </p>
      </Link>
    </div>
  );
};

export default MostProduct;
