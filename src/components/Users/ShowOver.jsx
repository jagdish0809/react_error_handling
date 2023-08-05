import React from "react";
import styles from "./ShowOver.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ShowOver = (props) => {
  const overlay_handle = () => {
    props.overlay_value(false);
  };
  return (
    <div className={styles.overlay}>
      <Card className={styles.overlay__card}>
        <div className={styles.error}>
          <h2 className={styles.overlay__text}>{props.text}</h2>
          {/* <button className={styles.overlay__btn} onClick={overlay_handle}>
            Close
          </button> */}
          <Button btnvalue={"Close"} onClick={overlay_handle}></Button>
        </div>
      </Card>
    </div>
  );
};

export default ShowOver;
