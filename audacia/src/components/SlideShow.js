import React from "react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import slide_1 from '../images/slide_1.png'
import slide_2 from '../images/slide_2.png'

SwiperCore.use([Keyboard, Mousewheel]);

const SlideShow = () => {
  const slides = [
    {
      key: 0,
      url:
        slide_1,
    },
    {
      key: 1,
      url:
        slide_2,
    },
    {
      key: 2,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOupnjrdRmGrfcdOJKjmmou6hppBj-Mov6UrIn2Edt-aNkM_9H33PhfJ9kOaiK7XOBEuQ&usqp=CAU",
    },
    {
      key: 3,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04HW_Ac9cyhE9xhfVuaJWaWyFoY9eTZjUOoM4rE2v8bTHSOBjtFQPMcuRy_D2kLJhJkY&usqp=CAU",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Swiper
        slidesPerView={1}
        direction="vertical"
        mousewheel={true}
        keyboard={true}
        style={{ height: "100%" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.key}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${slide.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: `blur(${slide.blur}px)`,
                zIndex: -1,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default SlideShow;
