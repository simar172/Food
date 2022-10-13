import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
const Back = (props) => {
  return <div className={style.backdrop} onClick={props.tohide}/>;
};
const Mdl = (props) => {
  return (
    <div className={style.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const ptl = document.querySelector(".nwcomp");
export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Back tohide={props.tohide}/>, ptl)}
      {ReactDOM.createPortal(<Mdl>{props.children}</Mdl>, ptl)}
    </Fragment>
  );
}
