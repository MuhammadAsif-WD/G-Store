import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import AddItem from "../../Assets/SVG/AddItem.svg";

const AddItems = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Adding Your Products", result);
        reset();
      });
  };

  return (
    <div>
      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 p-10 gap-x-10">
        <div data-aos="zoom-in-right">
          <img className="pt-40" src={AddItem} alt="" />
        </div>
        <div data-aos="zoom-in">
          <h4 className="text-4xl text-primary font-bold text-center">
            Add Your New Product
          </h4>
          <h6 className="text-secondary mt-3 text-center">
            Name: {user.displayName}, Email: {user.email}
          </h6>
          <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="mb-2 text-lg py-3 px-3 w-full border border-black mt-5 rounded outline-none text-black"
              required={true}
              placeholder="Photo URL"
              {...register("img")}
            />
            <input
              className="mb-2 text-lg py-3 px-3 w-full border border-black mt-5 rounded outline-none text-black"
              required={true}
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="mb-2 text-lg py-3 px-3 w-full border border-black mt-5 rounded outline-none text-black"
              required={true}
              placeholder="Price"
              {...register("price")}
            />
            <input
              className="mb-2 text-lg py-3 px-3 w-full border border-black mt-5 rounded outline-none text-black"
              required={true}
              placeholder="Quantity"
              {...register("quantity")}
            />
            <input
              className="mb-2 text-lg py-3 px-3 w-full border border-black mt-5 rounded outline-none text-black"
              required={true}
              placeholder="Supplier"
              {...register("supplier")}
            />
            <textarea
              className="mb-2 text-lg py-3 px-3 w-full border border-black mt-5 rounded outline-none text-black"
              required={true}
              placeholder="Description"
              {...register("description")}
            />
            <input
              className="hover:bg-primary border border-primary ease-in duration-300 py-3 w-full cursor-pointer hover:text-white uppercase rounded-md "
              type="submit"
              value="Add New Item"
            />
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddItems;
