import React from 'react'
import classes from "./modalGallery.module.scss";
import cross from "../../img/logo/cross.svg";

function ModalGallery({image, close}) {
  return (
    <div className={classes.modal}>
        <div className={classes.backdrop} onClick={close}/>
        <button className={classes.close} onClick={close}>
            <img
                src={cross}
                alt=""
            />
        </button>
        <img
            className={classes.img}
            src={image}
            alt=""
        />
    </div>
  )
}

export default ModalGallery