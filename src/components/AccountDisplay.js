import TransactionList from "./TransactionList";
import React, { useState } from "react";
import "./AccountDisplay.css";
const AccountDisplay = ({ currentUser, accountType, balance, setBalance }) => {
  return (
    <div className="accountContainer flexCentCol">
      <TransactionList
        currentUser={currentUser}
        setBalance={setBalance}
        balance={balance}
        accountType={accountType}
      />
    </div>
  );
};

export default AccountDisplay;
