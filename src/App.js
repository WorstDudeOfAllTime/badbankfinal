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
  const [savingsTransactions, setSavingsTransactions] = useState(null);
  const [checkingTransactions, setCheckingTransactions] = useState(null);
  const [freshTransaction, setFreshTransaction] = useState(false);
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          checkingBalance,
          setCheckingBalance,
          savingsBalance,
          setSavingsBalance,
          checkingTransactions,
          savingsTransactions,
          setSavingsTransactions,
          setCheckingTransactions,
          freshTransaction,
          setFreshTransaction,
        }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/accounts" element={<AccountPage />}></Route>
            <Route path="/allusers" element={<UserList />}></Route>
            <Route path="/about"></Route>
          </Routes>
        </Layout>
      </UserContext.Provider>
    </div>
  );
}

export default App;
