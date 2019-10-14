// Module Dependencies
import React from "react";

// Module Assets
import logo from "../../assets/logo.svg";

//Module functional componnent
const Header = props => {
  return (
    <div id="header">
      <div className="container">
        <div className="dv-flex">
          <div className="dv-ml-1">
            <img src={logo} className="dv-ml-logo" alt="logo" />
          </div>
          <div className="dv-ml-2">
            <button className="dv-button">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          <div className="dv-ml-3">
            <button className="dv-button">
              <i
                className="fa fa-bell"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
            </button>
            <button className="dv-button">
              <i
                className="fa fa-sign-in"
                aria-hidden="true"
                style={{ fontSize: "18px" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
