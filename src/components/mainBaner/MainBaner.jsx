import React from "react";
import classes from "./mainBaner.module.scss";
import home1 from "../img/home1.png";
import home3 from "../img/home3.jpg";
import home4 from "../img/home4.jpg";
import home5 from "../img/home5.jpg";
import home6 from "../img/home6.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function MainBaner() {
  const textAnimation = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const imgAnimation = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className={classes.mainBaner}>
      <div className={classes.wrapper}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          transition={{
            duration: 0.8,
          }}
          className={classes.text}
        >
          <h1 className={classes.h1}>
            <span className={classes.grand}> GRAND</span>{" "}
            <span className={classes.shoh}>SHOH</span> PALACE
          </h1>
          <p className={classes.paragraph}>
            СОВРЕМЕННЫЙ ЖИЛОЙ КОМПЛЕКС БИЗНЕС КЛАССА <br />
            В САМОМ СЕРДЦЕ СТОЛИЦЫ;
            <br />
            КВАРТИРЫ С ФУНКЦИОНАЛЬНОЙ ПЛАНИРОВКОЙ;
            <br /> КОМФОРТ, СПОКОЙСТВИЕ И БЕЗОПАСНОСТЬ.
          </p>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            to="application"
            rel="stylesheet"
            href=""
          >
            <button className={classes.btn}>Оставить заявку</button>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imgAnimation}
          transition={{
            duration: 0.8,
          }}
          className={classes.img}
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={classes.mySwiper}
          >
            <SwiperSlide>
              <img className={classes.img} src={home1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.img} src={home3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.img} src={home4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.img} src={home5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.img} src={home6} alt="" />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default MainBaner;
