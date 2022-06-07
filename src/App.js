
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import Info from "./Routes/Info";
import Two from "./Routes/Two";
import styled from "styled-components";
import "swiper/css";
const Container=styled.div`
  font-family:"Source Sans Pro", sans-serif;

  .swiper-pagination{
    display:flex;
    justify-content: center;
    background: transparent;
    cursor: pointer;
  }
  .swiper-pagination-bullet {
    margin-left:20px;
    background-color:transparent;
    font-weight:600;
    font-size:16px;
    display:flex !important;
    justify-content: center;
    align-items: center;
    color:#DDCECD;
    position:relative;
    transition:transform 0.5s;
    &:hover{
      transform:scale(1.3);
      color:#494846;
    }
  }
  .swiper-pagination-bullet-active {
    color:red;
  }
`;
const Header=styled.div`
  position:fixed;
  top:0;
  left:0;
  display:flex;
  width:100%;
  justify-content: space-between;
  align-items: center;
  padding:0 10vw;
  box-sizing: border-box;
  height:50px;
  z-index:999;
  & > div:first-child{
    font-weight:600;
    color:white;
    & > span{
      font-size: 20px;
      font-weight:800;
    }
  }
`;
const menuList=['Home', 'About Me', 'Skills', 'Portfolio'];
export default function App() {
  return (
    <Container>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        speed={800}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + menuList[index] + '</span>';
        }
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        style={{width:"100%", height:"100vh"}}
        touchRatio={0}
        onSlideChange={(index)=>console.log(index.activeIndex)}
      >
        <SwiperSlide><Info /></SwiperSlide>
        <SwiperSlide><Two /></SwiperSlide>
        <SwiperSlide><Two /></SwiperSlide>
        <SwiperSlide><Two /></SwiperSlide>
        <Header>
          <div><span>JooYeon</span>'s Portfolio Web Site</div>
          <div className="swiper-pagination" ></div>
        </Header>
      </Swiper>
    </Container>
  );
}
