import React from "react";
import classes from "./construction.module.scss";
import builder from "../img/builder.jpg";
import builder2 from "../img/builder2.jpg";
import builder3 from "../img/builder3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

function Construction() {
  const topAnimation = {
    hidden: { y: 300, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div id="construction" className={classes.construction}>
      <motion.div
        initial="hidden"
        whileInView="animate"
        variants={topAnimation}
        transition={{
          duration: 0.5,
        }}
        className={classes.wrapper}
      >
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
            slidesPerView={2}
            navigation={true}
            loop
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              type: "fraction",
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            modules={[Pagination, Navigation]}
            className={classes.slider}
            onAfterInit={(swiper) => {
              console.log(swiper.activeIndex)
              console.log(swiper.slides[swiper.activeIndex])
            }}
            onSlideChange={(swiper) => {
              console.log(swiper.activeIndex)
              console.log(swiper.slides[swiper.activeIndex])
            }}
          >
            <SwiperSlide className={classes.slide}>
              <img className={classes.builder} src={builder} alt="" />
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <img className={classes.builder} src={builder3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <img className={classes.builder} src={builder2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <img className={classes.builder} src={builder} alt="" />
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <img className={classes.builder} src={builder3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <img className={classes.builder} src={builder2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
}

export default Construction;
