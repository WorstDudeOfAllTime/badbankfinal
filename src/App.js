import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AccountPage from "./components/AccountPage";
import Layout from "./components/Layout";
import UserList from "./components/UserList";
import React, { useState } from "react";
import UserContext from "./components/UserContext";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [savingsBalance, setSavingsBalance] = useState(0);
  const [checkingBalance, setCheckingBalance] = useState(0);
  return (
    <div className="App">
      <Layout>
        <UserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            checkingBalance,
            setCheckingBalance,
            savingsBalance,
            setSavingsBalance,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/accounts" element={<AccountPage />}></Route>
            <Route path="/allusers" element={<UserList />}></Route>
            <Route path="/about"></Route>
          </Routes>
        </UserContext.Provider>
      </Layout>
    </div>
  );
}

export default App;
