import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header__container">
      <div className="header__hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <img className="header__logo" src="/logo2.png" alt="" />
      <div></div>
    </div>
  );
}
