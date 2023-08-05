import React from "react";
import styles from "./ShowUser.module.css";
import Card from "../UI/Card";

const ShowUser = (props) => {
  const deleteUser = (key) => {
    props.userDelete(key);
  };
  return props.usersDetails.length === 0 ? (
    <h2 style={{ color: "#fff" }}>No users added yet</h2>
  ) : (
    <Card className={styles.app_showuser}>
      <div className={styles.showuser}>
        {props.usersDetails.map((user) => {
          return (
            <div
              className={styles.showuser__container}
              key={user.id}
              onClick={() => deleteUser(user.id)}
            >
              <h2>{user.username}</h2>
              <h2>Age: {user.age}</h2>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ShowUser;
