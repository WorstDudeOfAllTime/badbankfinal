import TransactionList from "./TransactionList";
import React from "react";
import "./AccountDisplay.css";
const AccountDisplay = ({
  currentUser,
  accountType,
  balance,
  setBalance,
  transList,
}) => {
  return (
    <div className="accountContainer flexCentCol">
      <TransactionList
        currentUser={currentUser}
        setBalance={setBalance}
        balance={balance}
        accountType={accountType}
        transList={transList}
      />
    </div>
  );
};

export default AccountDisplay;
