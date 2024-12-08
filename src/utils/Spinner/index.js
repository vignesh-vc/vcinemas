import React from "react";
import "../../assets/css/spinner.css";
import { Link } from "react-router-dom";

export default function Spinner() {
  return (
    <div className="loader" id="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
      <div>
        <Link
          to={"/home"}
          className="btn btn-outline-danger spinner-danger-btn"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
