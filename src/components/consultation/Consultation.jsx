import React from "react";
import classes from "./consultation.module.scss";
import { motion } from "framer-motion";

function Consultation() {
  const swiperAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <div className={classes.consultation}>
      <motion.div
        initial="hidden"
        whileInView="animate"
        variants={swiperAnimation}
        transition={{
          duration: 0.8,
        }}
        className={classes.wrapper}
      >
        <h1 className={classes.h1}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h1>
        <p className={classes.paragraph}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        <div className={classes.inputIbutton}>
          <div className={classes.inputs}>
            <input
              className={classes.inputName}
              placeholder="Ваше имя*"
              type="text"
            />
            <input
              className={classes.inputPhone}
              placeholder="Номер телефона или email*"
              type="text"
            />{" "}
          </div>
          <button className={classes.buttonSend}>Отправить</button>
        </div>
      </motion.div>
    </div>
  );
}

export default Consultation;
