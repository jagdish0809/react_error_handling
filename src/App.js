import React from 'react';
import AddUser from './components/Users/AddUser';
import styles from './App.module.css';
import ShowUser from './components/Users/ShowUser';


function App() {
  const [userAdd, setUserAdd] = React.useState([]);
  const userData = (data) => {
    setUserAdd((prevData) => {
      return [...prevData, data]
    });
  }

  const userHandle = (id) => {
    setUserAdd((prevData) => {
      return prevData.filter((data) => {
        return data.id !== id
    })
    })
  }

  return (
    <div className={styles.App}>
      <AddUser userdetails={userData}/>
      <ShowUser usersDetails={userAdd} userDelete={userHandle}/>
   </div>
  );
}

export default App;
