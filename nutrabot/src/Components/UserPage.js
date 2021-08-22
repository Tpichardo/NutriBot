import React, { useState } from "react";
import FormCustomProduct from "./FormCustomProduct";
import ProgressCircle from "./ProgressCircle";
import Mymeals from "./Mymeals";
import Mydailycalories from "./Mydailycalories";
import "./UserPage.css"

export default function UserPage() {
  const [dailyCalories, setDailyCalories] = useState("");
  const [consumedCalories, setConsumedCalories] = useState(1000);
  const [userInput, setUserInput] = useState("")

  const handleChangeCalories = (e) => {
    setUserInput(e.target.value)
    console.log(e.target.value)
  };
  
  const handleSubmitCalories = (e) => {
    e.preventDefault();
    setDailyCalories(userInput);
    
  };

  return (
    <>
  <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="progress blue">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">{dailyCalories}%</div>
                </div>
            </div>
        </div>
    </div>

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

      <Mymeals />
      <FormCustomProduct />
    </div>
    </>
  );
}
