import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const nav = useNavigate();

  return (
    <header className="mycinemas-header">
      <div
        className="icon-header"
        id="navbar-icon-header"
        onClick={() => nav("/home")}
      >
        <i className="fa-solid fa-ticket"></i>
        <div className="myicon-header">V</div>
        <div className="myicon2-header">Cinemas</div>
      </div>

      <div>
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span />
        </label>
        <label htmlFor="active" className="close" />
        <div className="wrapper">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Ticket</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
