import React from "react";
import macroimg from "../Assets/macronutrients.jpeg";
import { Link } from "react-router-dom";
import './Resources.css';

export default function Resources() {
  return (
    <div className="Healthy-Resources">
      <h1>We are rooting for you!</h1>
      <img src={macroimg} alt='simple guide to understanding macronutrients' className="macros" />
      <section className="Resource-intro">
        <p>
          Here at Nutribot our goal is to provide our users with access to a large library of recipes
          based on their culinary preferences.
        </p>
        <p>
          We also aim to provide quick access to various tools that can assist our users in making informed decisions about how to eat healthier.
        </p>
        <h3>Here are some resources for you to try:</h3>
        <ol>
          <li>
            <Link className="resource" onClick={() => window.open("https://www.eatingwell.com/recipes/")}>EatWell </Link> has a variety of healthy
            and delectable dishes, such as quick dinners, easy lunch ideas, snacks, breakfast, soup, and more.
          </li>
          <li>
            Quickly input your personal information and <Link className="resource" onClick={() => window.open("https://www.calculator.net/calorie-calculator.html")}>
              Calorie Calculator
            </Link> will give you an accurate calculation of your personal daily caloric intake.
          </li>

        </ol>
      </section>
    </div>
  );
}
