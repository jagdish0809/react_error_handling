import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.btnvalue}
    </button>
  );
};

export default Button;
