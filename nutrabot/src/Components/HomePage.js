import React from "react";
import { motion } from "framer-motion";
import balancedDiet from "../Assets/Balanced-diet.jpeg";
import Check from '../Assets/check-circle.svg'
import Image from "react-bootstrap/Image"
import "./HomePage.css";

export default function Homepage() {
  return (
    <div className="Home">
      <div className="homeImg">
        <Image className="img-fluid" src={balancedDiet} alt="fruits and vegatbles on a table" />
      </div>
      <div className="homeContent">
        <p>Being health conscious just got easier with NutriBot!</p>
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
            <img src={Check} alt="checkmark" /> Track your calories
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
                  delay: 1
                }
              },
            }}
          >
            <img src={Check} alt="checkmark" /> Get a break down of ingredient macros
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
                  delay: 1.6
                }
              },
            }}
          >
            <img src={Check} alt="checkmark" /> Try delicious recipes!
          </motion.li>
        </ul>
      </div>

    </div>
  );
}
