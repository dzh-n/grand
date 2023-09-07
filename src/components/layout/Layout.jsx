import React from "react";
import classes from "./layout.module.scss";
import layout from "../img/logo/layout.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import { motion } from "framer-motion";
import Viewer from "react-viewer";

function Layout() {
  // const [modalActive, setModalActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const [toggle, setToggle] = useState(1);

  const setToggleFn = (el) => {
    setToggle(el);
  };

  const textAnimation = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div id="layout" className={classes.layout}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
        transition={{
          duration: 0.8,
        }}
        className={classes.wrapper}
      >
        <div className={classes.block}>
          <h1 className={classes.h1}>ОБЩАЯ ПЛАНИРОВКА</h1>
          <select
            className={classes.select}
            onChange={(el) => setToggleFn(el.target.value)}
          >
            <option value="1">Планировка 1 этажа</option>
            <option value="2">Планировка 2 этажа</option>
            <option value="3">Планировка 3 этажа</option>
          </select>
          <div className={classes.block__mobile}>
            <ul className={classes.items}>
              <li
                className={toggle == 1 ? classes.item_show : classes.item_none}
              >
                <div
                  onClick={() => {
                    setVisible(true);
                  }}
                  className={classes.item_body}
                >
                  <img src={layout} alt="asd" width={328} height={224} />
                </div>
              </li>
              <li
                className={toggle == 2 ? classes.item_show : classes.item_none}
              >
                <div
                  onClick={() => {
                    setVisible(true);
                  }}
                  className={classes.item_body}
                >
                  <img src={layout} alt="asd" width={328} height={224} />
                </div>
              </li>
              <li
                className={toggle == 3 ? classes.item_show : classes.item_none}
              >
                <div
                  onClick={() => {
                    setVisible(true);
                  }}
                  className={classes.item_body}
                >
                  <img src={layout} alt="asd" width={328} height={224} />
                </div>
              </li>
            </ul>
          </div>
          <Swiper
            className={classes.swiper}
            slidesPerView={2}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
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
                  setVisible(true);
                }}
                className={classes.imgBtn}
              >
                <img className={classes.imgLayout} src={layout} alt="" />
                <button className={classes.btn}>Планировка 1 этажа</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => {
                  setVisible(true);
                }}
                className={classes.imgBtn}
              >
                <img src={layout} alt="" />
                {/* <Viewer
                rotatable={false}
                visible={visible}
                onClose={() => { setVisible(false); } }
                images={[{src:'/assets/img/colorLayout.png', alt: ''}]}
                /> */}
                <button className={classes.btn}>Планировка 2-8 этажей</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => {
                  setVisible(true);
                }}
                className={classes.imgBtn}
              >
                <img src={layout} alt="" />
                <button className={classes.btn}>Планировка 2-8 этажей</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => {
                  setVisible(true);
                }}
                className={classes.imgBtn}
              >
                <img src={layout} alt="" />
                <button className={classes.btn}>Планировка 2-8 этажей</button>
              </div>
            </SwiperSlide>
          </Swiper>
          <Viewer
            className={classes.viewer}
            scalable={false}
            downloadable={false}
            changeable={false}
            rotatable={false}
            visible={visible}
            zoomSpeed={0.5}
            onClose={() => {
              setVisible(false);
            }}
            images={[{ src: "/assets/img/colorLayout.png", alt: "" }]}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Layout;
