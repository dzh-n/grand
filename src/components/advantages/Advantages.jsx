import React, { useState } from "react";
import classes from "./advantages.module.scss";
import icon from "../img/logo/icon.home.svg";
import parking from "../img/parking.jpg";
import playground from "../img/playground.jpg";
import videoSurveillance from "../img/videoSurveillance.jpg";
import closedYard from "../img/closeYard.jpg";
import waterSystem from "../img/waterSystem.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import AdvantagesModal from "./advantagesModal/AdvantagesModal";

function Advantages() {
  const [activeImage, setActiveImage] = useState(null);
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
    setActiveImage(null);
  };

  const handleClickImage = (image) => () => {
    setActiveImage(image);
  };

  return (
    <div id="advantages" className={classes.advantages}>
      {activeImage && <AdvantagesModal image={activeImage} close={onClose} />}
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
            Помимо удобного расположения и развитой инфраструктуры, Вас ждут
            остальные преимущества, которые послужат гарантией комфортной и
            счастливой жизни всех членов вашей семьи.
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
            slidesPerView={1}
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
                <h1 className={classes.h2}>Закрытый двор</h1>
                <p className={classes.paragraph2}>
                  Благоустроенная территория <br />
                  для всех членов семьи
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>2-х уровневый подземный паркинг</h1>
                <p className={classes.paragraph2}>
                  Гарантия сохранности вашего
                  <br /> автомобиля и экономия пространства
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Видеонаблюдение 24/7</h1>
                <p className={classes.paragraph2}>
                  Безопасность и спокойствие <br /> по всему периметру жилого
                  комплекса
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Высокие потолки</h1>
                <p className={classes.paragraph2}>
                  Обилие света и воздуха,
                  <br /> простор и ощущение свободы
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Продуманные планировки</h1>
                <p className={classes.paragraph2}>
                  Реализация ваших самых
                  <br />
                  смелых интерьерных решений
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Детская площадка</h1>
                <p className={classes.paragraph2}>
                  Безопасная и уютная территория
                  <br />
                  для самых маленьких жителей комплекса
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>
                  Высокоскоростные и бесшумные лифты
                </h1>
                <p className={classes.paragraph2}>
                  Использование новейших
                  <br />
                  технологий для комфорта жителей
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.card}>
                <img src={icon} alt="" />
                <h1 className={classes.h2}>Work Out зона во дворе</h1>
                <p className={classes.paragraph2}>
                  Приятное и полезное времяпрепровождение
                  <br />
                  для старших членов семьи
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
            onClick={handleClickImage(playground)}
          >
            <p className={classes.parking}>
              <span className={classes.borderbottom}>ДЕТСКАЯ</span> ПЛОЩАДКА
            </p>
            <img className={classes.parkingImg} src={playground} alt="" />
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
              onClick={handleClickImage(parking)}
            >
              <img className={classes.playgroundImg} src={parking} alt="" />
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
              onClick={handleClickImage(closedYard)}
            >
              <img
                className={classes.videoSurveillance}
                src={closedYard}
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
              onClick={handleClickImage(videoSurveillance)}
            >
              <img className={classes.closedYardImg} src={videoSurveillance} alt="" />{" "}
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
                <span className={classes.borderbottom}>УНИКАЛЬНЫЙ</span> ФАСАД
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
