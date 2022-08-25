import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div>
      <div className={style.center}>
        <div className={style.ring}></div>
        <span className={style.loading}>loading...</span>
      </div>
    </div>
  );
};

export default Loading;
