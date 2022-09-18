import UserDisplay from "./UserDisplay";
import React, { useEffect, useState } from "react";
import "./UserList.css";
const UserList = () => {
  const [userBase, setUserBase] = useState([]);
  useEffect(() => {
    const dataPull = async () => {
      let response = await fetch("http://localhost:5000/allUsers");
      let data = await response.json();
      setUserBase(data);
    };
    dataPull();
  }, []);

  return (
    <div className="flexCentCol userList">
      <div className="userHead flexCent">
        <h1>User List:</h1>
      </div>
      {userBase.map((user) => {
        return <UserDisplay userName={user.name} email={user.email} />;
      })}
    </div>
  );
};

export default UserList;
