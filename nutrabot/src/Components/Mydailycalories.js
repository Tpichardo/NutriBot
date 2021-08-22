import React from "react";

export default function Mydailycalories({
  handleChange,
  handleSubmit,
  dailyCalories,
}) {
  return (
    <div>
      {dailyCalories}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="mydailycalories"
          value={dailyCalories}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
