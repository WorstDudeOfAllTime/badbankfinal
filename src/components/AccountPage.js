import './AccountPage.css';
import AccountHeader from './AccountHeader';
import AccountDisplay from './AccountDisplay';
import React, { useState, useEffect } from 'react';
import DepositForm from './DepositForm';
const AccountPage = ({
  currentUser,
  savingsBalance,
  checkingBalance,
  setCheckingBalance,
  setSavingsBalance,
}) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <>
      <div
        className="overlayForm"
        style={{ display: overlay ? 'block' : 'none' }}
      >
        <div style={{ height: '100%', width: '100%' }} className="flexCent">
          <DepositForm
          currentUser={currentUser}
            setOverlay={setOverlay}
            savingsBalance={savingsBalance}
            checkingBalance={checkingBalance}
          />
        </div>
      </div>
      {currentUser ? (
        <div
          style={{ width: '100%', height: '100%' }}
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
