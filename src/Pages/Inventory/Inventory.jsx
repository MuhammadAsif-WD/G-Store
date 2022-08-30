import React from "react";
import useProducts from "../../Hooks/useProducts";
import InventoryDetails from "./InventoryDetails";

const Inventory = () => {
  const [products] = useProducts();

  return (
    <div>
      <div className="inventory_bg"></div>
      <div className="flex flex-wrap gap-x-8 2xl:p-20 xl:p-20 lg:p-20 md:p-20 mx-auto">
        {products.slice(10, 20).map((product) => (
          <InventoryDetails
            key={product._id}
            product={product}
          ></InventoryDetails>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
