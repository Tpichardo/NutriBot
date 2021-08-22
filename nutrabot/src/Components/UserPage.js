import React, { useState, useEffect } from "react";
import firebase from "firebase";
import FormCustomProduct from "./FormCustomProduct";
import Mymeals from "./Mymeals";
import "./UserPage.css";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Form } from "react-bootstrap";

export default function UserPage() {
  const [dailyCalories, setDailyCalories] = useState(0);
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [mealList, setMealList] = useState();
  const progress = ((consumedCalories / dailyCalories) * 100).toFixed(2);

  const handleChangeCalories = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmitCalories = (e) => {
    e.preventDefault();
    setDailyCalories(userInput);
  };

  useEffect(() => {
    const todoRef = firebase.database().ref("Meals");
    todoRef.on("value", (snapshot) => {
      const meals = snapshot.val();
      const mealList = [];
      for (let id in meals) {
        mealList.push({ id, ...meals[id] });
      }
      setMealList(mealList);
      console.log(mealList);
      const caloriesArr = mealList
        .map((meal) => meal.mealCalories)
        .reduce((prevVal, curVal) => parseFloat(prevVal) + parseFloat(curVal));
      setConsumedCalories(caloriesArr);
    });
  }, [consumedCalories]);

  const removeProduct = (productId) => {
    const mealRef = firebase.database().ref(`/Meals/${productId}`);
    mealRef.remove();
  };

  return (
    <>
      <div className="mydailycalories">
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar value={progress} text={ dailyCalories ? `${progress}%` : `%`} />;
        </div>
        My consumed calories: {consumedCalories.toFixed(2)}
        <br />
        My daily calories limit: {parseFloat(dailyCalories).toFixed(2)}
        <div className="mydailycaloriesform">
          <Form onSubmit={handleSubmitCalories}>
            <input
              type="number"
              name="mydailycalories"
              value={userInput}
              onChange={handleChangeCalories}
              placeholder="Enter Caloric Limit"
            />{" "}
            <input type="submit" value="Submit" />
          </Form>
        </div>
      </div>
      <div className="mymeals">
        <Mymeals
          mealList={mealList}
          removeProduct={removeProduct}
          consumedCalories={consumedCalories}
        />
        <FormCustomProduct />
      </div>
    </>
  );
}
