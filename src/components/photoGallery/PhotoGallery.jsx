import React, { useState, useRef } from "react";
import classes from "./photoGallery.module.scss";
import photoGallery1 from "../img/photoGallery1.png";
import photoGallery2 from "../img/photoGallery2.png";
import photoGallery3 from "../img/photoGallery3.png";
import prev from "../img/logo/arrowL.svg";
import next from "../img/logo/arrowR.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import ModalGallery from "./modalGallery/ModalGallery";

function PhotoGallery() {
  const [activeImage, setActiveImage] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef();
  const swiperRefDeckstop = useRef();

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
    <div className={classes.photoGallery}>
      {activeImage && <ModalGallery image={activeImage} close={onClose} />}
      <motion.div
        initial="hidden"
        whileInView="animate"
        variants={swiperAnimation}
        transition={{
          duration: 0.8,
        }}
        className={classes.wrapper}
      >
        <h1 className={classes.h1}>ФOTOГАЛЕРЕЯ</h1>
        <div className={classes.home}>
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            navigation={true}
            initialSlide={0}
            className={classes.swiper}
            pagination={{
              type: "fraction",
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            modules={[Pagination, Navigation]}
            onSlideChange={(swiper) => {
              swiper.slides.forEach((slide, index) => {
                let activeSlide = swiper.slides[index + 1];
                if (!activeSlide) {
                  activeSlide = swiper.slides[0];
                }
                const element = activeSlide.children[0];
                const backdrop = element.children[0];
                console.log(element);
                if (swiper.activeIndex === index) {
                  // element.style.transform = 'scale(1.2)'
                  element.style.transform = "scale(1.4)";
                  backdrop.style.opacity = "0";
                  activeSlide.style.zIndex = "1";
                } else {
                  // element.style.transform = 'none'
                  element.style.transform = "none";
                  backdrop.style.opacity = "1";
                  activeSlide.style.zIndex = "0";
                }
              });
            }}
            onAfterInit={(swiper) => {
              swiper.slides.forEach((slide, index) => {
                let activeSlide = swiper.slides[index + 1];
                if (!activeSlide) {
                  activeSlide = swiper.slides[0];
                }
                const element = activeSlide.children[0];
                const backdrop = element.children[0];
                console.log(element);
                if (swiper.activeIndex === index) {
                  // element.style.transform = 'scale(1.2)'
                  element.style.transform = "scale(1.4)";
                  backdrop.style.opacity = "0";
                  activeSlide.style.zIndex = "1";
                } else {
                  // element.style.transform = 'none'
                  element.style.transform = "none";
                  backdrop.style.opacity = "1";
                  activeSlide.style.zIndex = "0";
                }
              });
            }}
          >
            <SwiperSlide onClick={handleClickImage(photoGallery3)}>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery3}
                  className={classes.photoGallery3}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClickImage(photoGallery1)}>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery1}
                  className={classes.photoGallery1}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClickImage(photoGallery2)}>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery2}
                  className={classes.photoGallery2}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClickImage(photoGallery2)}>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery2}
                  className={classes.photoGallery2}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClickImage(photoGallery2)}>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery2}
                  className={classes.photoGallery2}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={handleClickImage(photoGallery2)}>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery2}
                  className={classes.photoGallery2}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classes.mobailHome}>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            modules={[FreeMode, Pagination, Thumbs]}
            className={classes.mySwiper2}
          >
            <SwiperSlide onClick={handleClickImage(photoGallery1)}>
              <img src={photoGallery1} />
            </SwiperSlide>
            <SwiperSlide onClick={handleClickImage(photoGallery2)}>
              <img src={photoGallery2} />
            </SwiperSlide>
            <SwiperSlide onClick={handleClickImage(photoGallery3)}>
              <img src={photoGallery3} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
           
            pagination={{
              type: "fraction",
            }}
            slidesPerView={2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className={classes.mySwiper}
          >
            <SwiperSlide className={classes.item}>
              <img src={photoGallery1} />
            </SwiperSlide>
            <SwiperSlide className={classes.item}>
              <img src={photoGallery2} />
            </SwiperSlide>
            <SwiperSlide className={classes.item}>
              <img src={photoGallery3} />
            </SwiperSlide>
          </Swiper>
          <div className={classes.buttons}>
            <div
              className={classes.arrow_button}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={prev} alt="prev" />
            </div>
            <div
              className={classes.arrow_button}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={next} alt="next" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PhotoGallery;
