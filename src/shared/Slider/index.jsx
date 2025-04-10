import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className='w-full h-auto mt-10 flex justify-center object-cover'>
   <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={50}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  loop={false} 
>
<SwiperSlide className="relative">
  <img
    src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_h1_slide.jpg?v=1728533089&width=3000"
    alt="Slide 1"
    className="w-full h-auto object-cover"
  />

  <div className="content-box absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6 rounded-lg">
    <h2 className="text-green-700 text-[18px] text-left font-bold">A brand new series</h2>
    <p className="text-black block font-semibold text-left text-[60px]">THE WORLD OF </p>
    <p className="text-black block font-semibold text-left text-[60px]">YOUNG ADULT</p>
    <p className="text-black block font-semibold text-left text-[60px]">BOOKS</p>
    <span className="text-black block mr-56 text-[16px]">Save up to 15% on new releases</span>
    <button className="btn-primary mr-56 mt-8 border-1 border-gray-300 bg-white justify-center items-center text-black p-4 rounded-2xl hover:bg-green-700 ">
      Discover Now <i className="ri-arrow-right-s-line"></i>
    </button>
  </div>

  
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50">
    <img 
      src="https://cdn.shopify.com/s/files/1/0906/6014/3387/files/ap_bo_bgsale_2.png?v=1729500187" 
      alt="Sale" 
      className="w-32 h-32 animate-spin duration-[50s] ease-in-out"
    />
    <span className="absolute text-white text-[20px] font-bold">15% OFF</span>
  </div>
</SwiperSlide>

      <SwiperSlide>
        <img
          src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_slide_2.jpg?v=1729482289&width=3000"
          alt="Slide 2"
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_slide_1.jpg?v=1729482289&width=3000"
          alt="Slide 3"
          className="w-full h-auto"
        />
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Slider
