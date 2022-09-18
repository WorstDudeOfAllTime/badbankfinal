import AccountHeader from "./AccountHeader";
import AccountDisplay from "./AccountDisplay";
import React, { useState, useEffect } from "react";
const AccountPage = ({ currentUser }) => {
  const [savingsBalance, setSavingsBalance] = useState(0);
  const [checkingBalance, setCheckingBalance] = useState(0);
  return (
    <>
      {currentUser ? (
        <div
          style={{ width: "100%", height: "100%" }}
          className="fullAcounts flexCentCol"
        >
          <AccountHeader
            currentUser={currentUser}
            accountType="checking"
            balance={checkingBalance}
          />
          <AccountDisplay
            currentUser={currentUser}
            accountType="checking"
            balance={checkingBalance}
            setBalance={setCheckingBalance}
          />
          <AccountHeader
            currentUser={currentUser}
            accountType="savings"
            balance={savingsBalance}
          />
          <AccountDisplay
            currentUser={currentUser}
            accountType="savings"
            balance={savingsBalance}
            setBalance={setSavingsBalance}
          />
        </div>
      ) : (
        <div>
          <h1>You must login to view account details</h1>
        </div>
      )}
    </>
  );
};

export default AccountPage;
