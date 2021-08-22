import React, { useState } from "react";
import FormCustomProduct from "./FormCustomProduct";
import ProgressCircle from "./ProgressCircle";
import Mymeals from "./Mymeals";
import Mydailycalories from "./Mydailycalories";

export default function UserPage() {
  const [dailyCalories, setDailyCalories] = useState(2000);
  const [consumedCalories, setConsumedCalories] = useState(1000);

  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      <Mymeals />
      <FormCustomProduct handleChange={handleChange} value={"value"} />
      <br />
      <Mydailycalories
        dailyCalories={dailyCalories}
        setDailyCalories={setDailyCalories}
      />
      <ProgressCircle
        dailyCalories={dailyCalories}
        consumedCalories={consumedCalories}
      />
    </div>
  );
}
