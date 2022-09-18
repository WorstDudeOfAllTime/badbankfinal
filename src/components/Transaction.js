import "./Transaction.css";
const Transaction = ({ date, company, amount, balance }) => {
  return (
    <div className="transactionContainer flexCent">
      <div className="date">{date}</div>
      <div className="company">{company}</div>
      <div className="amount">${amount}</div>
      <div className="balance">${balance}</div>
    </div>
  );
};
export default Transaction;
