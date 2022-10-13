import React, { useContext } from "react";
import Context from "../Store/Cart-context";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";
export default function Cart(props) {
  const cont = useContext(Context);
  const amt = `Rs ${cont.TotalAmount}`;
  const itms = (
    <ul className={style["cart-items"]}>
      {cont.items.map((fd) => (
        <div>
          <li>
            <h3>
              {fd.name}---Rs {fd.price}
              <hr />
            </h3>
          </li>
        </div>
      ))}
    </ul>
  );
  const f = false;
  return (
    <div>
      {
        <Modal tohide={props.tohide}>
          {itms}
          <div className={style.total}>
            <span>Total Amount</span>
            <span>{amt}</span>
          </div>
          <div className={style.actions}>
            <span className={style["button--alt"]}>
              <button onClick={props.tohide}>Close</button>
            </span>
            <span>
              <button>Order</button>
            </span>
          </div>
        </Modal>
      }
    </div>
  );
}
