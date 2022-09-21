import React, { createContext } from "react";
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  savingsBalance: 0,
  setSavingsBalance: () => {},
  checkingBalance: 0,
  setCheckingBalance: () => {},
  checkingTransactions: null,
  setCheckingTransactions: () => {},
  savingsTransactions: null,
  setSavingsTransactions: () => {},
  freshTransaction: null,
  setFreshTransaction: () => {},
});
export default UserContext;
