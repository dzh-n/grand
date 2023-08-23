import React, { useState } from "react";
import classes from "./modal.module.scss";
import colorLayout from "../img/colorLayout.png";
import cross from "../img/logo/crossBlack.svg";

function Modal({ modalActive, setModalActive }) {
  return (
    <div className={classes.modalWrapper}>
      <div
        onClick={() => setModalActive(false)}
        className={modalActive ? classes.modalActive : classes.modal}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            modalActive ? classes.modalContentActive : classes.modalContent
          }
        >
          <div>
            {modalActive === true && (
              <div>
                <div className={classes.btnImg}>
                  <button className={classes.btn}>Планировка 1 этажа</button>
                  <img onClick={() => setModalActive(false)} className={classes.icon} src={cross} alt="" />
                </div>
                <img className={classes.img} src={colorLayout} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
