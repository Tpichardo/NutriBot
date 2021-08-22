import React from "react";

export default function Resources() {
  return (
    <div className="Healthy Resources">
      <section className="Resource-intro">
        Here at Nutrabot we aim to gives our users access to a vast library of
        recipes based on what they are interested in cooking. We also want to
        give our users fast access to other tools that can help us make informed
        decisions on how we eat.
      </section>
      <br />
      <section className="EatWell-info">
        <a href="https://www.eatingwell.com/recipes/">EatWell </a> offers
        healthy, delicious recipes, including quick dinner, easy lunch ideas,
        snacks, breakfast, soup and more.
      </section>
      <br />
      <section className="Calorie-calculator">
        Quickly input your personal information and{" "}
        <a href="https://www.calculator.net/calorie-calculator.html">
          Calorie Calculator
        </a>
        will give you an accurate calculation of your personal daily calorie
        intake.
      </section>
    </div>
  );
}
