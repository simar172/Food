import React, { Fragment } from "react";
import img from "./ml.jpg";
import styles from "./header.module.css";
import Button from "./Button";

export default function Header(props) {
  const f =false;
  return (
    <>
      <div className={styles.header}>
        <h1>React Meals</h1>
        {/* <button >Cart</button> */}
        <div>
          <Button onclick={props.onclick}/>
        </div>
      </div>
      <div className={styles["main-image"]}>
        <img src={img} alt="simar here" />
      </div>
    </>
  );
}
