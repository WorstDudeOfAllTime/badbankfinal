import "./Home.css";
import EmployeeDisplay from "./EmployeeDisplay";
import LinkBox from "./LinkBox";
import amir from "./../img/amir.jpg";
import andres from "./../img/andres.jpg";
import rachel from "./../img/rachel.jpg";
import metin from "./../img/metin.jpg";
import pepi from "./../img/pepi.jpg";
import abhay from "./../img/abhay.jpg";
import ian from "./../img/ian.jpg";
import Login from "./Login";
import SignUp from "./SignUp";
import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [signUpDisplay, setSignUpDisplay] = useState(false);
  return (
    <div className="homeContainer flexCentCol">
      <div
        className="overlay flexCent"
        style={{ display: loginDisplay ? "block" : "none" }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        ></div>
        <div className="flexCent" style={{ height: "100%", width: "100%" }}>
          <Login
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setLoginDisplay={setLoginDisplay}
          />
        </div>
      </div>
      <div
        className="overlay flexCent"
        style={{ display: signUpDisplay ? "block" : "none" }}
      >
        <div className="flexCent" style={{ height: "100%", width: "100%" }}>
          <SignUp
            signUpDisplay={signUpDisplay}
            setSignUpDisplay={setSignUpDisplay}
          />
        </div>
      </div>
      <div className="login sections flexCent">
        <div className="half picBox flexCentCol">
          <h1>WORST</h1>
          <div className="halfSplit flexCentCol">
            {currentUser ? (
              <h1>Welcome back,</h1>
            ) : (
              <>
                <div id="left"></div>
                <div id="leftBox" className="welcomeBox flexCentCol">
                  <h2>Already have an account?</h2>
                  <h3>Of course you do.</h3>
                  <button
                    onClick={() => {
                      setLoginDisplay(true);
                    }}
                  >
                    Login.
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="half textBox flexCentCol">
          <h1>BANK</h1>
          <div className="halfSplit flexCentCol" style={{ color: "white" }}>
            {currentUser ? (
              <h1 style={{ color: "black" }}>
                {currentUser.name.substring(0, currentUser.name.indexOf(" "))}
              </h1>
            ) : (
              <>
                <div id="right"></div>
                <div id="rightBox" className="welcomeBox flexCentCol">
                  <h2>Ready to lose it all?</h2>
                  <h3>Of course you are.</h3>
                  <button
                    id="open"
                    onClick={() => {
                      setSignUpDisplay(true);
                    }}
                  >
                    Open an Account.
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="staff sections flexCentCol">
        <div className="headBox">
          <h2>Our Team.</h2>
        </div>
        <div className="teamBox flexCent">
          <EmployeeDisplay
            img={amir}
            name="Kris"
            position={"CEO"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet tincidunt tortor, at fringilla ex consectetur sit amet. Morbi ullamcorper mollis enim, non ullamcorper orci lacinia in"
            }
          />
          <EmployeeDisplay
            img={andres}
            name="Kris"
            position={"CFO"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet tincidunt tortor, at fringilla ex consectetur sit amet. Morbi ullamcorper mollis enim, non ullamcorper orci lacinia in"
            }
          />
          <EmployeeDisplay
            img={rachel}
            name="Kris"
            position={"Custodian"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet tincidunt tortor, at fringilla ex consectetur sit amet. Morbi ullamcorper mollis enim, non ullamcorper orci lacinia in"
            }
          />
        </div>
      </div>
      <div className="info sections flexCent">
        <LinkBox backgroundImg={metin} header={"Community"} />
        <LinkBox backgroundImg={ian} header={"Development"} />
        <LinkBox backgroundImg={pepi} header={"Investment"} />
        <LinkBox backgroundImg={abhay} header={"Environment"} />
      </div>
      <div className="warn sections flexCent">
        <div className="warnWrap flexCentCol">
          <p>
            Investing in securities involves risks, and there is always the
            potential of losing money when you invest in securities. You should
            review any planned financial transactions that may have tax or legal
            implications with your personal tax or legal advisor.
          </p>
          <p>
            Securities products are provided by Merrill Lynch, Pierce, Fenner &
            Smith Incorporated (also referred to as "MLPF&S", or "Merrill"), a
            registered broker-dealer, registered investment adviser, Member SIPC
            layer, and a wholly-owned subsidiary of Bank of America Corporation.
            MLPF&S makes available certain investment products sponsored,
            managed, distributed or provided by companies that are affiliates of
            Bank of America Corporation.
          </p>
          <br />
          <p>
            Bank of America Private Bank is a division of Bank of America, N.A.,
            Member FDIC and a wholly owned subsidiary of Bank of America
            Corporation. Trust and fiduciary services are provided by Bank of
            America, N.A. and U.S. Trust Company of Delaware. Both are indirect
            subsidiaries of Bank of America Corporation.
          </p>
          <br />
          <p>
            Insurance Products are offered through Merrill Lynch Life Agency
            Inc. (MLLA) and/or Banc of America Insurance Services, Inc., both of
            which are licensed insurance agencies and wholly-owned subsidiaries
            of Bank of America Corporation. Banking, credit card, automobile
            loans, mortgage and home equity products are provided by Bank of
            America, N.A. and affiliated banks, Members FDIC and wholly owned
            subsidiaries of Bank of America Corporation.
          </p>
          <br />
          <p>
            Credit and collateral are subject to approval. Terms and conditions
            apply. This is not a commitment to lend. Programs, rates, terms and
            conditions are subject to change without notice.
          </p>
          <br />
          <p>
            Investment and insurance products: Are not FDIC insured Are not Bank
            Guaranteed May Lose Value Are not Deposits Are Not Insured by Any
            Federal Government Agency Are Not a Condition to Any Banking Service
            or Activity
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
