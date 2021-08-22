import React from "react";
import { Link } from "react-router-dom";
import balancedDiet from "../Assets/Balanced-diet.jpeg";
import Check from '../Assets/check-circle.svg'
import "./HomePage.css";

export default function Homepage() {
  return (
    <div className="Home">
      <div className="img">
        <img src={balancedDiet} alt="fruits and vegatbles on a table" />
      </div>
      <div className="text">
        <h1>You are what you eat!</h1>
        <p>Being health consious just got easier with NutraBot!</p>
        <ul>
          <li>  <img src={Check} /> Track your calories</li>
          <li> <img src={Check} /> Get a break down of ingredient macros</li>
          <li> <img src={Check} /> get delicious recipes!</li>
        </ul>
      </div>

    </div>
  );
}