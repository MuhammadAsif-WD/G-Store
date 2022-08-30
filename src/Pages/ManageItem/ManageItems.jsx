import React from "react";
import useProducts from "../../Hooks/useProducts";
import ItemDetails from "./ItemDetails";

const ManageItems = () => {
  const [products] = useProducts();
  return (
    <div className="flex flex-wrap gap-x-8 2xl:p-20 xl:p-20 lg:p-20 md:p-20 mx-auto">
      {products.map((product) => (
        <ItemDetails key={product._id} product={product}></ItemDetails>
      ))}
    </div>
  );
};

export default ManageItems;
