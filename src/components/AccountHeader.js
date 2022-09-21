import "./AccountHeader.css";
import React, { useEffect, useState } from "react";
const AccountHeader = ({ currentUser, accountType, balance }) => {
  const [accountInfo, setAccountInfo] = useState({});
  useEffect(() => {
    console.log(currentUser.email);
    console.log(accountType);
    const dataPull = async () => {
      let response = await fetch(
        `http://localhost:5000/accounts/${currentUser.email}/${accountType}`
      );
      let data = await response.json();
      setAccountInfo(data);
    };
    dataPull();
  }, [currentUser]);

  return (
    <div className="accountHeader flexCentCol">
      <div className="flexCent accTop">
        <div className="mainDeets">
          <h1>{accountType.charAt(0).toUpperCase() + accountType.slice(1)}</h1>
          <h3>Account Number: {accountInfo.accountNum} </h3>
          <h3>Debit Card: </h3>
        </div>
        <div className="mainAnc flexCentCol">
          <div className="ancHeads flexCent">
            <h4>Available Balance:</h4>
            <h4>Interest YTD:</h4>
            <h4>Annual Percentage Yield:</h4>
          </div>
          <div className="ancData flexCent">
            <h4>${balance.toFixed(2)}</h4>
            <h4>$0.67</h4>
            <h4>0.10%</h4>
          </div>
        </div>
      </div>
      <div className="detailsSec flexCent">
        <div className="acctNums flexCent">
          <div className="numHeads flexCentCol">
            <h4>Router Number: </h4>
            <h4>Daily Interest:</h4>
            <h4>Account Type:</h4>
            <h4>Date Opened:</h4>
            <h4>Owner:</h4>
          </div>
          <div className="numData flexCentCol">
            <h4>{accountInfo.routingNum}</h4>
            <h4>$0.00</h4>
            <h4>Interest Checking</h4>
            <h4>{accountInfo.date}</h4>
            <h4>Kristoffer Bertolino</h4>
          </div>
          <div className="numHeads flexCentCol">
            <h4>Interest Rate:</h4>
            <h4>Overdraft Transfer:</h4>
            <h4>CoverDraft:</h4>
          </div>
          <div className="numData flexCentCol">
            <h4>0.10%</h4>
            <h4>No</h4>
            <h4>On($100)</h4>
          </div>
          <div className="numHeads flexCentCol">
            <h4>Interest Prior Year:</h4>
            <h4>Next Statement:</h4>
            <h4>Early Deposit:</h4>
          </div>
          <div className="numData flexCentCol">
            <h4>$0.54</h4>
            <h4>Oct 15, 2022</h4>
            <h4>Yes</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
