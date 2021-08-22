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
        mealList.push({id, ...meals[id] });
      }
      setMealList(mealList);
    });
  }, []);

  const removeProduct = (productId) => {
    const mealRef = firebase.database().ref(`/Meals/${productId}`);
    mealRef.remove();
  }


  return (
    <div>
      <h1>My Meals</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Carbs</th>
              <th>Protein</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mealList &&
              mealList.map((meal) => <Meal key={uuid()} meal={meal} removeProduct={removeProduct} />)}
          </tbody>
        </table>
      </section>
    </div>
  );
}
