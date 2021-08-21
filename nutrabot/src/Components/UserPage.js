import React, { useState } from "react";
import FormCustomProduct from "./FormCustomProduct";
import ProgressCircle from "./ProgressCircle";

export default function UserPage() {
  const [dailyCalories, setDailyCalories] = useState(2000);
  const [consumedCalories, setConsumedCalories] = useState(1000);

  const handleChange = () => {};

  return (
    <div>
      user page calories, meals tracker
      <FormCustomProduct handleChange={handleChange} value={"value"} />
      <ProgressCircle
        dailyCalories={dailyCalories}
        consumedCalories={consumedCalories}
      />
    </div>
  );
}