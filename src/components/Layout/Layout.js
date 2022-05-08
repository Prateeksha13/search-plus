import React from "react";

import Header from "../Header/Header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app-page">
      <Header />
      <div className="app-page-content">{children}</div>
    </div>
  );
};

export default Layout;
