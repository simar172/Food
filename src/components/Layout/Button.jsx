import React, { useContext } from "react";
import Cartivon from "./Cartivon";
import style from "./Headercartbtn.module.css";
import Context from "../Store/Cart-context";

export default function Button(props) {
  
  const ctx = useContext(Context);
  const det = ctx.items.reduce((currnum, item) => {
    console.log(ctx.items.length)
    return currnum + item.TotalAmount;
  }, 0);
  return (
    <button className={style.button} onClick={props.onclick}>
      <span className={style.icon}>
        <Cartivon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{det}</span>
    </button>
  );
}
