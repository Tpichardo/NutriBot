import React from "react";
import { Link } from "react-router-dom";
import balancedDiet from "../Assets/Balanced-diet.jpeg";
import "./HomePage.css";

export default function Homepage() {
  return (
    <div className="Home">
      <div className="img">
        <img src={balancedDiet} alt="fruits and vegatbles on a table" />
      </div>
      <div className="text">
        <h1>You are what you eat!</h1>
        <p>
          Being health consious just got easier. Track your calories, get a
          break down of ingreditent macros, and get delicious recipes with
          NutraBot!
        </p>
      </div>
    </div>
  );
}
