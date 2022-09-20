import React, { createContext } from "react";
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  savingsBalance: 0,
  setSavingsBalance: () => {},
  checkingBalance: 0,
  setCheckingBalance: () => {},
});
export default UserContext;
