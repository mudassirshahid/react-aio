import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
  "../../../../public/vite.svg",
];

const BrandLogoSlider = () => {
  return (
    <div className="w-full overflow-hidden py-6 px-6">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="5"
        spaceBetween={10}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        freeMode={true}
        freeModeMomentum={false}
        grabCursor={false}
        allowTouchMove={false}
        breakpoints={{
            640: {
              spaceBetween: 24,
              slidesPerView: '3'
            },
            768: {
              spaceBetween: 32,
            },
            1024: {
              spaceBetween: 40,
            },
          }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "auto" }}
            className="flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-12 w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandLogoSlider;

// Add this css for continous running
// .swiper-wrapper {
//     transition-timing-function: linear !important;
//   }