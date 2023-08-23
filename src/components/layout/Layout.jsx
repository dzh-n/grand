import React from "react";
import classes from "./layout.module.scss";
import layout from "../img/logo/layout.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Modal from "../modal/Modal";

function Layout() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div id="layout" className={classes.layout}>
      <div className={classes.wrapper}>
        <div className={classes.block}>
          <h1 className={classes.h1}>ОБЩАЯ ПЛАНИРОВКА</h1>
          <select className={classes.select}>
            <option value="">Планировка 1 этажа</option>
            <option value="">Планировка 1 этажа</option>
            <option value="">Планировка 1 этажа</option>
          </select>
          <Swiper
            className={classes.swiper}
            slidesPerView={2}
            spaceBetween={24}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              720: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
          >
            <SwiperSlide>
              <div
                onClick={() => {
                  setModalActive(true);
                }}
                className={classes.imgBtn}
              >
                <img className={classes.imgLayout} src={layout} alt="" />
                <button
                  className={classes.btn}
                  onClick={() => {
                    setModalActive(true);
                  }}
                >
                  Планировка 1 этажа
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => {
                    setModalActive(true);
                  }} className={classes.imgBtn}>
                <img src={layout} alt="" />
                <button
                  onClick={() => {
                    setModalActive(true);
                  }}
                  className={classes.btn}
                >
                  Планировка 2-8 этажей
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => {
                    setModalActive(true);
                  }} className={classes.imgBtn}>
                <img src={layout} alt="" />
                <button
                  onClick={() => {
                    setModalActive(true);
                  }}
                  className={classes.btn}
                >
                  Планировка 2-8 этажей
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => {
                    setModalActive(true);
                  }} className={classes.imgBtn}>
                <img src={layout} alt="" />
                <button
                  onClick={() => {
                    setModalActive(true);
                  }}
                  className={classes.btn}
                >
                  Планировка 2-8 этажей
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
          <Modal modalActive={modalActive} setModalActive={setModalActive} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
