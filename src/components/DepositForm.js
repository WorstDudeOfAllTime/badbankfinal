import './DepositForm.css';
import React, { useState } from 'react';
const DepositForm = ({
  currentUser,
  setOverlay,
  savingsBalance,
  checkingBalance,
  setSavingsBalance,
  setCheckingBalance,
}) => {
  const [accountType, setAccountType] = useState('Checking');
  const [transactionType, setTransactionType] = useState('Deposit');
  const [amount, setAmount] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (transactionType === 'Withdraw' && parseFloat(amount) > savingsBalance) ||
      (transactionType === 'Deposit' && parseFloat(amount) > checkingBalance)
    ) {
      setSuccessMessage('Insufficient funds for withdraw');
    }

    fetch(`http://localhost:5000/${transactionType.toLowerCase()}Funds`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: currentUser.email,
        type: accountType.toLowerCase(),
        amount: parseFloat(amount),
        transactionType: transactionType.toLowerCase(),
      })
    }).then(res=>res.json())
    .then(data => {
      setSuccessMessage(data.message)
    }).catch(err => console.log(err));
  };

  return (
    <div className="depositContainer flexCentCol">
      <div
        style={{
          height: '10%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={() => setOverlay(false)}
          style={{
            background: 'none',
            cursor: 'pointer',
            color: 'black',
            fontSize: '25px',
            width: '40px',
            textAlign: 'center',
            margin: '0',
          }}
        >
          X
        </button>
      </div>
      <div className="flexCentCol" style={{ height: '90%', width: '100%' }}>
        <h3 style={{ color: 'black' }}>Enter Amount.</h3>
        <form
          className="flexCentCol"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <select
            value={accountType}
            onChange={(e) => {
              setAccountType(e.target.value);
            }}
          >
            <option>Checking</option>
            <option>Savings</option>
          </select>
          <select
            value={transactionType}
            onChange={(e) => {
              setTransactionType(e.target.value);
            }}
          >
            <option>Deposit</option>
            <option>Withdraw</option>
          </select>
          <input
            value={amount}
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
            required
          ></input>
          <button id="signup">Submit.</button>
        </form>
      </div>
      <div>{successMessage}</div>
    </div>
  );
};

export default DepositForm;
