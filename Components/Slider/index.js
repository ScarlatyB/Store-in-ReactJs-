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
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > 
        <SwiperSlide><img src="images/roupas.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/gold.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/pedra.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/relogio-pulso.jpg" /></SwiperSlide>
        <SwiperSlide><img src="images/jeans.jpg" /></SwiperSlide>
        
        </Swiper>
      </S.Container> 
      
    </>
  );
}