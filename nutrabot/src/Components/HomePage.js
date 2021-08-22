import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import balancedDiet from "../Assets/Balanced-diet.jpeg";
import Check from '../Assets/check-circle.svg'
import "./HomePage.css";

export default function Homepage() {
  return (
    <div className="Home">
      <div className="img">
        <img src={balancedDiet} alt="fruits and vegatbles on a table" />
      </div>
      <div className="text">
        <h1>You are what you eat!</h1>
        <p>Being health consious just got easier with NutraBot!</p>
        <ul>
          <motion.li
            initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .4
                }
              },
            }}
          >
            <img src={Check} /> Track your calories
          </motion.li>
          <motion.li
            initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .8
                }
              },
            }}
          >
            <img src={Check} /> Get a break down of ingredient macros
          </motion.li>
          <motion.li
            initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.2
                }
              },
            }}
          >
            <img src={Check} /> Try delicious recipes!
          </motion.li>
        </ul>
      </div>

    </div>
  );
}