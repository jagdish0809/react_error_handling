import React from "react";
import styles from "./AddUser.module.css";
import ShowOver from "./ShowOver";
import Card from "../UI/Card";
import Button from "../UI/Button";

const userdata = {
    username: "",
    age: 0
}

const AddUser = (props) => {
    const [user, setUser] = React.useState(userdata);
    const [showOverlay, setShowOverlay] = React.useState(false);
    const [overlayText, setOverlayText] = React.useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(user)
    if(user.username.trim().length > 4 && user.age > 1){
      setUser(userdata)
      props.userdetails(user)
    }
    if(user.age < 1 ){
      setShowOverlay(true)
      setOverlayText("Age cannot be less than 1")
    }
    if(user.username.trim().length < 4){
      console.log("Username cannot be less than 4 characters")
      setShowOverlay(true)
      setOverlayText("Username cannot be less than 4 characters")
    }
  };

  const dataChangeHandler = (input, value) => {
    setUser((prevState) =>{
        return {...prevState, [input]: value, id: Math.random().toString()}
    })
  }

  const handleOverlay = (value) => {
    setShowOverlay(value)
  }

  return (
    <Card className={styles.app__adduser_main}>
      <form className={styles.app__adduser} onSubmit={formSubmitHandler}>
        {showOverlay && (
          <ShowOver text={overlayText} overlay_value={handleOverlay} />
        )}
        <label htmlFor="username" className={styles.app__adduser_label}>
          Username
        </label>
        <input
          id="username"
          type="text"
          value={user.username}
          className={styles.app__adduser_input}
          onChange={(e) => dataChangeHandler("username", e.target.value)}
        />
        <label htmlFor="age" className={styles.app__adduser_label}>
          Age (Years)
        </label>
        <input
          id="age"
          type="number"
          value={user.age}
          onChange={(e) => dataChangeHandler("age", e.target.value)}
          className={styles.app__adduser_input}
        />
        <Button
          btnvalue={"Add User"}
          type={"submit"}
          className={styles.app__adduser_btn}
        ></Button>
      </form>
    </Card>
  );
};

export default AddUser;
