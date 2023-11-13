import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import * as S from "./styled";
export default function Slider() {
  return (
    <> 
      <S.Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="images/maquina.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/cel.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/headphone.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/caneco.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/cozinha.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/blusa.jpg" /></SwiperSlide>
        
      </Swiper>

      
      </S.Container> 
      <S.Header2>
        <h1>All you need is here!</h1>
      </S.Header2>
      
    </>
  );
}