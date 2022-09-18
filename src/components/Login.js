import "./Login.css";
import React, { useState } from "react";
const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5000/login/${email.toLowerCase()}/${password}`
    );
    const user = await response.json();
    console.log(user);
    setEmail("");
    setPassword("");
    setCurrentUser(user);
    setSuccessMessage(`Welcome, ${user.name}`);
  };

  return (
    <div className="loginContainer flexCentCol">
      <h3 style={{ color: "white" }}>Login to your Account.</h3>
      <form
        className="flexCentCol"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          value={email}
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          value={password}
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button id="login">Login.</button>
      </form>
      <div style={{ color: "white" }}>{successMessage}</div>
    </div>
  );
};

export default Login;
