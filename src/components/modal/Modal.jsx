import React, { useState } from "react";
import classes from "./modal.module.scss";
import colorLayout from "../img/colorLayout.png";
import cross from "../img/logo/crossBlack.svg";
import { useLockedBody } from "usehooks-ts";
import Viewer from "react-viewer";

function Modal({ visible, setVisible }) {
  useLockedBody(visible)
  return (
    <div className={classes.modalWrapper}>
      <div
        onClick={() => setVisible(false)}
        className={visible ? classes.modalActive : classes.modal}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            visible ? classes.modalContentActive : classes.modalContent
          }
        >
          <div>
            {visible === true && (
              <div>
                <div className={classes.btnImg}>
                  <button className={classes.btn}>Планировка 1 этажа</button>
                  <img
                    onClick={() => setVisible(false)}
                    className={classes.icon}
                    src={cross}
                    alt=""
                  />
                </div>
                {/* <img className={classes.img} src={colorLayout} alt="" /> */}
                <Viewer
                rotatable={false}
                visible={visible}
                onClose={() => { setVisible(false); } }
                images={[{src:'/assets/img/colorLayout.png', alt: ''}]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
