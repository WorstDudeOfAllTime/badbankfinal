import './TransferForm.css';
const TransferForm = ({ setOverlay, receiver }) => {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className="transferFormContainer flexCentCol">
      <div id="buttonBox" className="flexCent" style={{ width: '100%', height: '10%'}}>
        <button onClick={()=>{setOverlay(false)}}>X</button>
      </div>
      <div className="transferFormBox flexCentCol">
        <h2>Transfer Funds to: {receiver}</h2>
        <form className="flexCentCol" onSubmit={(e)=>handleSubmit(e)} >
          <input type="number"></input>
          <button style={{margin: '0'}}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TransferForm;
