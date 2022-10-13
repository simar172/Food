import React, { useContext } from "react";
import Context from "../Store/Cart-context";
import style from './Mealitem.module.css';
import Mealitemform from "./Mealitemform";

export default function Mealitem(props) {
  const price = `Rs ${props.price}`;
  const cont=useContext(Context);
  const addto=(amount)=>{
          cont.add({
            id:props.id,
            name:props.name,
            TotalAmount:amount,
            price:props.price
          })
  }
  return (
    <li className={style.meal}>
      <div>
        <div >
          <h3 >{props.name}</h3>
        </div>
        <div className={style.description}>
          <h3>{props.description}</h3>
        </div>
        <div className={style.price}> 
          <h3>{price}</h3>
        </div>
      </div>
      <div><Mealitemform addto={addto}/></div>
    </li>
  );
}
