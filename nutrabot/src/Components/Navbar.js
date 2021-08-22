import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import homeIcon from "../Assets/homeicon.png";
import resourcesIcon from "../Assets/resources.png";
import mymealsIcon from "../Assets/dinner.svg";
import nutrabot from "../Assets/nutrabot.png";
import Searchbar from "./SearchBar";

export default function Navbar({ clearSearch }) {
  return (
    <nav>
      <Link to="/">
        <img src={nutrabot} alt="home" onClick={clearSearch} />
      </Link>
      <Searchbar />
      <Link to="/mymeals">
        {" "}
        <img src={mymealsIcon} alt="my meals" onClick={clearSearch} />
      </Link>
      <Link to="/resources">
        {" "}
        <img src={resourcesIcon} alt="resources" onClick={clearSearch} />
      </Link>
    </nav>
  );
}
