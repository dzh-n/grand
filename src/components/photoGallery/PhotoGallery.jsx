import React, { useState, useRef } from "react";
import classes from "./photoGallery.module.scss";
import photoGallery1 from "../img/photoGallery1.png";
import photoGallery2 from "../img/photoGallery2.png";
import photoGallery3 from "../img/photoGallery3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function PhotoGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={classes.photoGallery}>
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Фотогалерея</h1>
        <div className={classes.home}>
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            initialSlide={0}
            className={classes.swiper}
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
            <SwiperSlide>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery3}
                  className={classes.photoGallery3}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery1}
                  className={classes.photoGallery1}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery2}
                  className={classes.photoGallery2}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery2}
                  className={classes.photoGallery2}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.photo}>
                <div className={classes.backdrop} />
                <img
                  src={photoGallery2}
                  className={classes.photoGallery2}
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
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
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={false}
            // thumbs={{ swiper: thumbsSwiper }}
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            modules={[FreeMode, Navigation, Thumbs]}
            className={classes.mySwiper2}
          >
            <SwiperSlide>
              <img src={photoGallery1} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={photoGallery2} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={photoGallery3} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={classes.mySwiper}
          >
            <SwiperSlide>
              <div className={thumbsSwiper ? classes.active:classes.backdrop}>
            <img src={photoGallery1} /></div>
            </SwiperSlide>
            <SwiperSlide>
            <img src={photoGallery2} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={photoGallery3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
