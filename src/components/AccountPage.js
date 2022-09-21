import "./AccountPage.css";
import AccountHeader from "./AccountHeader";
import AccountDisplay from "./AccountDisplay";
import React, { useContext, useState } from "react";
import DepositForm from "./DepositForm";
import UserContext from "./UserContext";
const AccountPage = () => {
  const {
    currentUser,
    savingsBalance,
    setSavingsBalance,
    checkingBalance,
    setCheckingBalance,
    checkingTransactions,
    savingsTransactions,
  } = useContext(UserContext);
  const [overlay, setOverlay] = useState(false);
  return (
    <>
      <div
        className="overlayForm"
        style={{ display: overlay ? "block" : "none" }}
      >
        <div style={{ height: "100%", width: "100%" }} className="flexCent">
          <DepositForm setOverlay={setOverlay} />
        </div>
      </div>
      {currentUser ? (
        <div
          style={{ width: "100%", height: "100%" }}
          className="fullAccounts flexCentCol"
        >
          <div className="pageHeader flexCent">
            <h1>Accounts:</h1>
            <button
              onClick={() => {
                setOverlay(true);
              }}
            >
              Deposit/Withdraw
            </button>
          </div>
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
            transList={checkingTransactions}
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
            transList={savingsTransactions}
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
