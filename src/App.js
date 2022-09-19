import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AccountPage from "./components/AccountPage";
import Layout from "./components/Layout";
import UserList from "./components/UserList";
import React, { useState } from "react";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [savingsBalance, setSavingsBalance] = useState(0)
  const [checkingBalance, setCheckingBalance] = useState(0)
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
            }
          ></Route>
          <Route
            path="/accounts"
            element={<AccountPage currentUser={currentUser} setCheckingBalance={setCheckingBalance} setSavingsBalance={setSavingsBalance} savingsBalance={savingsBalance} checkingBalance={checkingBalance}/>}
          ></Route>
          <Route
            path="/allusers"
            element={<UserList currentUser={currentUser} />}
          ></Route>
          <Route path="/about"></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
