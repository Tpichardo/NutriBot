import React from "react";
import { motion } from "framer-motion";
import "./ProgressCircle.css";

export default function ProgressCircle({ dailyCalories, consumedCalories }) {
  const progress = (consumedCalories / dailyCalories) * 100;

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}
