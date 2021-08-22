import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Meal from "./Meal.js";
import uuid from "react-uuid";

export default function Mymeals() {
  const [mealList, setMealList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("Meals");
    todoRef.on("value", (snapshot) => {
      const meals = snapshot.val();
      const mealList = [];
      for (let id in meals) {
        mealList.push({ ...meals[id] });
      }
      setMealList(mealList);
    });
  }, []);

  return (
    <div>
      <h1>My Meals</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {mealList &&
              mealList.map((meal) => <Meal key={uuid()} meal={meal} />)}
          </tbody>
        </table>
      </section>
    </div>
  );
}
