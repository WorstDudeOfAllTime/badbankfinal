import "./Footer.css";
import facebook from "./../img/facebook.png";
import instagram from "./../img/instagram.png";
import linkedin from "./../img/linkedin.png";
import twitter from "./../img/twitter.png";
const Footer = () => {
  return (
    <footer className="footerContainer flexCentCol">
      <div className="linkBox flexCent">
        <p>
          Locations | Contact Us | Help | Careers | Privacy | Security | Sitemap{" "}
        </p>
      </div>
      <div className="socialMedia flexCent">
        <img className="socialImg" src={twitter}></img>
        <img className="socialImg" src={instagram}></img>
        <img className="socialImg" src={linkedin}></img>
        <img className="socialImg" src={facebook}></img>
      </div>
      <div className="signoff">
        <p>2022 Worst Bank Corporation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
