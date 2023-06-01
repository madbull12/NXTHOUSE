"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
const HouseCard = ({ house }: { house: HouseProps }) => {
  return (
    <div>
      <Swiper slidesPerView={1}>
        {house.images.map((image) => (
          <SwiperSlide className="w-full h-auto rounded-xl overflow-hidden">
            <Image
              alt="house-pic"
              src={image}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HouseCard;
