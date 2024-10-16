import React from "react";

export const Header = () => {
  return (
    <header id="header" className="navbar-default" style={{ padding: "10px 0" }}>
      <div className="container">
        <div
          className="header-content"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <a className="navbar-brand" href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/img/MARLIN.png"
              alt="Marlin Logo"
              style={{ width: "115px", height: "70px", marginLeft: "-310px",marginRight:"130px", objectFit: "contain" }}
            />
            MARLIN AQUATIC CENTER
          </a>
       
        </div>
      </div>
    </header>
  );
};