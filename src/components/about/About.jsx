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
            duration: 0.8,
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
            duration: 0.8,
          }}
          className={classes.text}
        >
          <h1 className={classes.h1}>О ЖИЛОМ КОМПЛЕКСЕ</h1>
          <p className={classes.paragraph}>
            Добро пожаловать в ЖК премиум класса "Гранд Шоҳ Палас"! Располагаясь{" "}
            <span className={classes.paragraph2}>
               в самом сердце нашей столицы — напротив Нац. Банка
              (башни-близнецы), "Гранд Шоҳ Палас" состоит из пяти блоков "А",
              "Б" "В", "Г" и "Д" — по 20 и 22 этажа.
            </span>
            <p
              className={open ? classes.hidden : classes.orange}
              onClick={() => setOpen(!open)}
            >
              Больше
            </p>
            {open && (
              <span>
                в самом сердце нашей столицы — напротив Нац. Банка
                (башни-близнецы), "Гранд Шоҳ Палас" состоит из пяти блоков "А",
                "Б" "В", "Г" и "Д" — по 20 и 22 этажа.
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
