import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1 className="text-4xl mt-16 text-primary text-center font-bold">
        All your products
      </h1>
      <div data-aos="zoom-in">
        <div className="shadow-xl w-72 mt-10 mb-10 p-5 hover:bg-primary ease-in duration-500  rounded-md text-secondary hover:text-white mx-auto cursor-pointer">
          <img
            className="w-20 rounded-full mx-auto"
            src={user.photoURL}
            alt=""
          />
          <h6 className="text-sm text-center mt-4">
            Name: <b>{user.displayName}</b>
            <br /> Email: {user.email || "GoogleSignIn"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
