import "./SignUp.css";
import React, { useState } from "react";
const SignUp = ({ signUpDisplay, setSignUpDisplay }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validatePassword = (password) => {
    if (password.length > 8 && /\d/.test(password)) {
      return true;
    }
    setSuccessMessage(
      "Password needs to be 8 characters long and include a number"
    );
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) return;

    fetch("http://localhost:5000/createUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccessMessage(data.message);
        setTimeout(() => {
          setSignUpDisplay(!signUpDisplay);
        }, 5000);
      })
      .catch((err) => setSuccessMessage(err));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signupContainer flexCentCol">
      <div
        style={{
          height: "10%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={() => setSignUpDisplay(!signUpDisplay)}
          style={{
            background: "none",
            cursor: "pointer",
            color: "black",
            fontSize: "25px",
            width: "40px",
            textAlign: "center",
            margin: "0",
          }}
        >
          X
        </button>
      </div>
      <div className="flexCentCol" style={{ height: "90%", width: "100%" }}>
        <h3 style={{ color: "black" }}>Create an Account.</h3>
        <form onSubmit={(e) => handleSubmit(e)} className="flexCentCol">
          <input
            value={name}
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></input>
          <input
            value={email}
            type="text"
            placeholder="Enter your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>
          <input
            value={password}
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          ></input>
          <button id="signup">Sign Up.</button>
        </form>
      </div>
      <div>{successMessage}</div>
    </div>
  );
};

export default SignUp;
