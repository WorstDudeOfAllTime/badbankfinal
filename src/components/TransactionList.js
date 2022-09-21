import "./TransactionList.css";
import Transaction from "./Transaction";
import React, { useEffect, useState, useContext } from "react";
import UserContext from "./UserContext";
const TransactionList = ({ currentUser, setBalance, transList, balance }) => {
  let theBalance = 0;
  let transArray = [];
  transList.forEach((item) => {
    transArray.push(item.amount + theBalance);
    theBalance += item.amount;
  });
  transArray = transArray.reverse();
  return (
    <div className="fullTransactions">
      <div className="headers flexCent">
        <div className="date">Date</div>
        <div className="company">Company</div>
        <div className="amount">Amount</div>
        <div className="balance">Balance</div>
      </div>
      {transList.reverse().map((trans, index) => {
        return (
          <Transaction
            date={trans.date}
            company={trans.company}
            amount={trans.amount.toFixed(2)}
            balance={transArray[index].toFixed(2)}
          />
        );
      })}
    </div>
  );
};
export default TransactionList;
