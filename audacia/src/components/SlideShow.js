import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

SwiperCore.use([Keyboard, Mousewheel]);

const SlideShow = () => {

  const slides = [
    { key: 1, url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" },
    { key: 2, url: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
    { key: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOupnjrdRmGrfcdOJKjmmou6hppBj-Mov6UrIn2Edt-aNkM_9H33PhfJ9kOaiK7XOBEuQ&usqp=CAU" },
    { key: 4, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04HW_Ac9cyhE9xhfVuaJWaWyFoY9eTZjUOoM4rE2v8bTHSOBjtFQPMcuRy_D2kLJhJkY&usqp=CAU" }
  ];

  return (
    <Swiper
      slidesPerView={1}
      direction="vertical"
      mousewheel={true}
      keyboard={true}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.key}>
          <img src={slide.url} alt="random" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
