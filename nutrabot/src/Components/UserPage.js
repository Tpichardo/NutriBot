
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import FormCustomProduct from "./FormCustomProduct";
import ProgressCircle from "./ProgressCircle";
import Mymeals from "./Mymeals";
import Mydailycalories from "./Mydailycalories";
import "./UserPage.css";

export default function UserPage() {
  const [dailyCalories, setDailyCalories] = useState("");
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [mealList, setMealList] = useState();
  const progress = (consumedCalories / dailyCalories) * 100;

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
        mealList.push({id, ...meals[id] });
      }
      setMealList(mealList);
      console.log(mealList)
      const caloriesArr = mealList.map((meal) => meal.mealCalories).reduce((prevVal, curVal) => (parseFloat(prevVal) + parseFloat(curVal)))
      console.log(caloriesArr)
      console.log(consumedCalories)
setConsumedCalories(caloriesArr)
    });
  }, []);

  const removeProduct = (productId) => {
    const mealRef = firebase.database().ref(`/Meals/${productId}`);
    mealRef.remove();
  }


  return (
    <>
    My consumed calories: {consumedCalories}
      {/* <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="progress blue">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">100%</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mydailycalories">
        My daily calories: {dailyCalories}
        <ProgressCircle
          dailyCalories={dailyCalories}
          consumedCalories={consumedCalories}
        />
        <div className="mydailycaloriesform">
          <form onSubmit={handleSubmitCalories}>
            <input
              type="number"
              name="mydailycalories"
              value={userInput}
              onChange={handleChangeCalories}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Mymeals mealList={mealList} removeProduct={removeProduct} consumedCalories={consumedCalories} />
        <FormCustomProduct />
      </div>
    </>
  );
}
