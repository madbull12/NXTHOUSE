"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import '../styles/global.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperCore, {
  Navigation,
  Pagination,
  type Swiper as SwiperRef,
} from "swiper";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useHover } from "usehooks-ts";

SwiperCore.use([Pagination]);
const HouseCard = ({ house }: { house: HouseProps }) => {
  const swiperRef = useRef<SwiperRef>();
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <div className="flex flex-col gap-y-2 cursor-pointer" ref={hoverRef}>
      <div className=" relative" >
        <Swiper
          allowTouchMove={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
        >
          {house.images.map((image, i) => (
            <SwiperSlide
              key={i}
              className="w-full h-auto rounded-xl overflow-hidden"
            >
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
        <button className="absolute top-2 z-50 right-2">
          <AiOutlineHeart className="text-2xl text-gray-500 " />
        </button>
        <div
          className={`${
            isHover ? "opacity-100" : "opacity-0"
          } transition-all ease-in-out absolute top-1/2 z-50 -translate-y-1/2 flex w-full text-xl  justify-between  `}
        >
          <button
            className="bg-background rounded-full w-8 grid place-items-center h-8 ml-4 shadow-sm"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <BiChevronLeft />
          </button>
          <button
            className="bg-background rounded-full w-8 grid place-items-center h-8 mr-4 shadow-sm"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <BiChevronRight />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-[500] ">
            {house.city}, {house.country}
          </h2>
          <p>
            <span className="font-[500]">
              Rp {house.price.toLocaleString()}
            </span>{" "}
            night
          </p>
        </div>
        <div className="flex items-center gap-x-1">
          <AiFillStar />
          <p>{house.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
