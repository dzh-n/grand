import React from "react";
import classes from "./consultation.module.scss";

function Consultation() {
  return (
    <div className={classes.consultation}>
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h1>
        <p className={classes.paragraph}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
        <div className={classes.inputIbutton}>
          <div className={classes.inputs}>
            <input
              className={classes.input}
              placeholder="Ваше имя*"
              type="text"
            />
            <input
              className={classes.input}
              placeholder="Номер телефона или email*"
              type="text"
            />{" "}
          </div>
          <button className={classes.buttonSend}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
