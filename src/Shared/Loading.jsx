import React from "react";
import Logo from "../Assets/SVG/Logo.svg";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div>
      <div className={style.center}>
        <div className={style.ring}></div>
        <span className={style.loading}>
          <div className="flex gap-x-3 justify-start font-bold text-3xl animate__animated animate__flash animate__infinite	infinite animate__slower">
            <div className="flex align-middle gap-x-2">
              <img className="w-10" src={Logo} alt="" />
              <h1 className="text-primary text-3xl mt-1 font-bold">G-Store</h1>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Loading;
