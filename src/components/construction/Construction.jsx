import React from "react";
import classes from "./construction.module.scss";
import builder from "../img/builder.jpg";
import builder2 from "../img/builder2.jpg";
import builder3 from "../img/builder3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Construction() {
  return (
    <div id="construction" className={classes.construction}>
      <div className={classes.wrapper}>
        <div className={classes.row}>
          <h1 className={classes.h1}>ХОД СТРОИТЕЛЬСТВА</h1>
          <div className={classes.select}>
            <select className={classes.year}>
              <option>2023</option>
            </select>
            <select className={classes.month}>
              <option>январь</option>
              <option>февраль</option>
              <option>март</option>
              <option>апрель</option>
              <option>май</option>
              <option>июнь</option>
              <option>июль</option>
              <option>август</option>
              <option>сентябрь</option>
              <option>октябрь</option>
              <option>ноябрь</option>
              <option>декабрь</option>
            </select>
          </div>
        </div>
        <div className={classes.swiper}>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            breakpoints={{
              720: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
    
          >
            <SwiperSlide>
              <img className={classes.builder} src={builder} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className={classes.builder} src={builder3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img className={classes.builder} src={builder2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Construction;
