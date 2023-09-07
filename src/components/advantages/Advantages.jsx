import React, { useState } from "react";
import classes from "./advantages.module.scss";
import icon from "../img/logo/icon.home.svg";
import parking from "../img/parking.png";
import playground from "../img/playground.png";
import videoSurveillance from "../img/videoSurveillance.png";
import closedYard from "../img/closedYard.png";
import waterSystem from "../img/waterSystem.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import AdvantagesModal from "./advantagesModal/AdvantagesModal";

function Advantages() {
  const [activeImage, setActiveImage] = useState(null)
  const textAnimation = {
    hidden: { x: -200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  const imgAnimation = {
    hidden: { x: 300, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const swiperAnimation = {
    hidden: { y: 20, opacity: 0, scale: 0.5 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  const onClose = () => {
    setActiveImage(null)
  }

  const handleClickImage = (image) => () => {
    setActiveImage(image)
  }

  return (
    <div id="advantages" className={classes.advantages}>
      {activeImage && <AdvantagesModal image={activeImage} close={onClose}/>}
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <motion.h1
            initial="hidden"
            whileInView="animate"
            variants={textAnimation}
            transition={{
              duration: 0.8,
            }}
            className={classes.h1}
          >
            ОCНОВНЫЕ ПРЕИМУЩЕСТВА
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="animate"
            variants={imgAnimation}
            transition={{
              duration: 0.8,
            }}
            className={classes.paragraph}
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi Ut enim ad <br />
            minim veniam. Ut enim ad minim veniam, quis nostrud exercitation
            ullamc.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="animate"
          variants={swiperAnimation}
          transition={{
            duration: 0.8,
          }}
          className={classes.sliderWrapper}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              720: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className={classes.slider_swiper}
          >
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Охранная система</h1>
                <p className={classes.paragraph2}>
                  Ut enim ad minim veniam, quis nostrud <br /> exercitation
                  ullamco laboris nisi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Охранная система</h1>
                <p className={classes.paragraph2}>
                  Ut enim ad minim veniam, quis nostrud <br /> exercitation
                  ullamco laboris nisi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Охранная система</h1>
                <p className={classes.paragraph2}>
                  Ut enim ad minim veniam, quis nostrud <br /> exercitation
                  ullamco laboris nisi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Охранная система</h1>
                <p className={classes.paragraph2}>
                  Ut enim ad minim veniam, quis nostrud <br /> exercitation
                  ullamco laboris nisi.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <div className={classes.imgAdvantages}>
          <motion.div
            initial="hidden"
            whileInView="animate"
            variants={swiperAnimation}
            transition={{
              duration: 0.8,
            }}
            className={classes.parkingcomand}
            onClick={handleClickImage(parking)}
          >
            <p className={classes.parking}>
              <span className={classes.borderbottom}>ДЕТСКАЯ</span> ПЛОЩАДКА
            </p>
            <img className={classes.parkingImg} src={parking} alt="" />
          </motion.div>
          <div className={classes.colImg}>
            <motion.div
              initial="hidden"
              whileInView="animate"
              variants={swiperAnimation}
              transition={{
                duration: 0.8,
              }}
              className={classes.playgroundcomand}
              onClick={handleClickImage(playground)}
            >
              <img className={classes.playgroundImg} src={playground} alt="" />{" "}
              <p className={classes.playground}>
                <span className={classes.borderbottom}>ПАРКО</span>ВКА
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="animate"
              variants={swiperAnimation}
              transition={{
                duration: 0.8,
              }}
              className={classes.videoSurveillanceComand}
              onClick={handleClickImage(videoSurveillance)}
            >
              <img
                className={classes.videoSurveillance}
                src={videoSurveillance}
                alt=""
              />{" "}
              <p className={classes.playground}>
                <span className={classes.borderbottom}>ЗАКРЫТЫЙ</span> ДВОР

              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="animate"
              variants={swiperAnimation}
              transition={{
                duration: 0.8,
              }}
              className={classes.playgroundcomand}
              onClick={handleClickImage(closedYard)}
            >
              <img className={classes.closedYardImg} src={closedYard} alt="" />{" "}
              <p className={classes.playground}>
              <span className={classes.borderbottom}>ВИДЕОНА</span>БЛЮДЕНИЕ
              </p>
            </motion.div>
            <motion.div
              transition={{
                duration: 0.8,
              }}
              initial="hidden"
              whileInView="animate"
              variants={swiperAnimation}
              className={classes.waterSystemComand}
              onClick={handleClickImage(waterSystem)}
            >
              <img className={classes.waterSystem} src={waterSystem} alt="" />{" "}
              <p className={classes.playground}>
                <span className={classes.borderbottom}>УНИКАЛЬНЫЙ</span>{" "}
                ФАСАД
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
