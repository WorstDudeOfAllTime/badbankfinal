import "./LinkBox.css";
const LinkBox = ({ backgroundImg, header }) => {
  return (
    <div
      className="linkContainer"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2 className="theHead">{header}</h2>
    </div>
  );
};
export default LinkBox;
