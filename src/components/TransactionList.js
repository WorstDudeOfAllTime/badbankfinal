import './TransactionList.css';
import Transaction from './Transaction';
import React, { useEffect, useState } from 'react';
const TransactionList = ({ currentUser, setBalance, balance, accountType }) => {
  const [transList, setTransList] = useState([]);
  let theBalance = 0;

  useEffect(() => {
    
    const dataPull = async () => {
      let response = await fetch(
        `http://localhost:5000/getBalance/${currentUser.email}/${accountType}`
      );
      let data = await response.json();
      console.log(data);
      setTransList(data);
    };
    dataPull();
  }, []);

  const listMapper = () => {

  }

  return (
    <div className="fullTransactions">
      <div className="headers flexCent">
        <div className="date">Date</div>
        <div className="company">Company</div>
        <div className="amount">Amount</div>
        <div className="balance">Balance</div>
      </div>
      {transList.reverse().map((trans) => {
        return (
          <Transaction
            date={trans.date}
            company={trans.company}
            amount={trans.amount}
            balance={theBalance}
          />
        );
      })}
    </div>
  );
};
export default TransactionList;
