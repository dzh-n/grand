import React from "react";
import classes from "./about.module.scss";
import home2 from "../img/home2.png";
import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [open, setOpen] = useState(false);

  const textAnimation = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    
    },
  };
  const imgAnimation = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
     
    },
  };

  return (
    <div id="about" className={classes.about}>
      {" "}
      <div className={classes.wrapper}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imgAnimation}
          transition={{
            duration: 0.8
          }}
          className={classes.img}
        >
          <img className={classes.img} src={home2} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          transition={{
            duration: 0.8
          }}
          className={classes.text}
        >
          <h1 className={classes.h1}>О ЖИЛОМ КОМПЛЕКСЕ</h1>
          <p className={classes.paragraph}>
            Жилой комплекс «Шоҳ Палас Plaza» расположен рядом с зелёной зоной
            города, которая гарантирует прекрасный вид из большинства окон.
            Владельцы таких квартир{" "}
            <span className={classes.paragraph2}>
              получают максимум свободного пространства, ведь частью интерьера
              их дома становится сам город. Это уникальное место для жизни
              человека, где предоставляются огромные возможности для создания
              истинного комфорта.
            </span>
            <p
              className={open ? classes.hidden : classes.orange}
              onClick={() => setOpen(!open)}
            >
              Больше
            </p>
            {open && (
              <span>
                получают максимум свободного пространства, ведь частью интерьера
                их дома становится сам город. Это уникальное место для жизни
                человека, где предоставляются огромные возможности для создания
                истинного комфорта.
                <p
                  onClick={() => setOpen(!open)}
                  className={open ? classes.orange : classes.hidden}
                >
                  Скрыть
                </p>{" "}
              </span>
            )}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
