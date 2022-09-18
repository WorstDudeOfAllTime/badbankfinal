import "./UserDisplay.css";
const UserDisplay = ({ userName, email }) => {
  return (
    <div className="flexCent userDisplay" style={{ width: "100%" }}>
      <h2>{userName}</h2>
      <h2>{email}</h2>
      <button>Transfer Funds.</button>
    </div>
  );
};

export default UserDisplay;
