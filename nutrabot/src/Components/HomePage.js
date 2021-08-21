import React from "react";
import { Link } from "react-router-dom";
import pizza from "../Assets/man_eating_huge_pizza.jpeg";
import "./HomePage.css";

export default function Homepage() {
  return (
    <div>
      <p>Home page</p>
      <p>Welcome to Nutrabot</p>
      <p>You are what you eat</p>
      <img src={pizza} alt="man eating huge pizza" />
    </div>
  );
}