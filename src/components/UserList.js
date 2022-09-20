import React, { useContext, useEffect, useState } from 'react';
import './UserList.css';
import UserDisplay from './UserDisplay';
import OverlayForm from './OverlayForm';
import UserContext from './UserContext';
const UserList = () => {
  const [userBase, setUserBase] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [receiver, setReceiver] = useState(null);
  const [accountType, setAccountType] = useState('Checking');
  const [amount, setAmount] = useState(0);
  const { currentUser, savingsBalance, checkingBalance } =
    useContext(UserContext);
  useEffect(() => {
    const dataPull = async () => {
      let response = await fetch('http://localhost:5000/allUsers');
      let data = await response.json();
      setUserBase(data);
    };
    dataPull();
  }, []);

  const handleTransferSubmit = (e,) => {
    e.preventDefault();
    if (
      (accountType === "Checking" && parseFloat(amount) > savingsBalance) ||
      (accountType === "Savings" && parseFloat(amount) > checkingBalance)
    ) {
      console.log("insufficient funds")
    }
  };

  return (
    <div className="flexCentCol userList">
      <div
        className="userOverlay flexCentCol"
        style={{ display: overlay ? 'block' : 'none' }}
      >
        <div className="flexCentCol" style={{ height: '100%', width: '100%' }}>
          <OverlayForm
            closeBoxFunction={setOverlay}
            formHeader={`Transfer Funds to ${receiver}`}
          >
            <div className="transferFormBox flexCentCol">
              <form
                className="flexCentCol"
                onSubmit={(e) => handleTransferSubmit(e)}
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
                <input value={amount} type="number" onChange={(e)=>setAmount(e.target.value)}></input>
                <button style={{ margin: '0' }}>Submit</button>
              </form>
            </div>
          </OverlayForm>
        </div>
      </div>
      {currentUser ? (
        <>
          <div className="userHead flexCent">
            <h1>User List:</h1>
          </div>
          {userBase
            .filter((user) => currentUser.name !== user.name)
            .map((user) => {
              return (
                <UserDisplay
                  userName={user.name}
                  email={user.email}
                  setOverlay={setOverlay}
                  s
                  setReceiver={setReceiver}
                />
              );
            })}
        </>
      ) : (
        <h1>You are not authorized to view this page</h1>
      )}
    </div>
  );
};

export default UserList;
