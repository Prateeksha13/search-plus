import React from "react";
import AppleLogo from "../../assets/apple-logo.svg";

import "./headerstyles.css";

export const Header = () => (
  <header className="app-header">
    <div className="app-header-content">
      <a className="app-header-brand" href="/">
        <img src={AppleLogo} alt="Apple" />
        <span className="app-header-brand-name">Search+</span>
      </a>
      <div></div>
    </div>
  </header>
);

export default Header;
