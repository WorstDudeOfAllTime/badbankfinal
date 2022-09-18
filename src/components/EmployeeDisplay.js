import "./EmployeeDisplay.css";
const EmployeeDisplay = ({ img, name, position, description }) => {
  return (
    <div
      className="employeeContainer flexCent"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="infoBox flexCentCol">
        <div className="nameBox flexCent">
          <h2>
            {name} - {position}
          </h2>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDisplay;
