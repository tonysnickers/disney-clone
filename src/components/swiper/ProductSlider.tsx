import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import CardSwiper from "./CardSwiper";
import { SliderContent } from "../../styledComponents/swiper/swiper";

const ProductSlider = ({ movies }: any) => {
  return (
    <SliderContent>
      <h1 style={{ textAlign: "center" }}>Film</h1>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {movies.map((movie: any) => (
          <SwiperSlide>
            <CardSwiper movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContent>
  );
};

export default ProductSlider;
