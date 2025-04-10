import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const CategorySlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      loop={true} 
      breakpoints={{
        360: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 8,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
      pagination={{ clickable: true }} 
    >
      <SwiperSlide className=' bg-my-custom-green'>
        <div className="card border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="image"><img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80" alt="category" /></div>
            <div className="title">Fantasy</div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="card border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="image"><img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80" alt="category" /></div>
            <div className="title">Fantasy</div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="image"><img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80" alt="category" /></div>
            <div className="title">Romans</div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="image"><img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80" alt="category" /></div>
            <div className="title">Fiction</div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="image"><img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80" alt="category" /></div>
            <div className="title">Fantasy</div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="image"><img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80" alt="category" /></div>
            <div className="title">Children</div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="image"><img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80" alt="category" /></div>
            <div className="title">Family</div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card border-2 border-gray-300 rounded-md p-2 flex flex-col items-center justify-center  ">
            <div className="image"><img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80" alt="category"  /></div>
            <div className="title">Horror</div>
        </div></SwiperSlide>
    </Swiper>
  );
};

const TopCategories = () => {
  return (
    <div className="container max-w-screen-xl mx-auto bg-my-custom-green flex box-border  items-center justify-items-stretch pr-96  pt-20 pb-12  ">
      <h3 className='-translate-y-28 flex whitespace-nowrap pl-28  font-semibold text-2xl '>Top categories</h3>
      <div className="category-list w-full max-w-max bg-my-custom-green">
        <CategorySlider />
      </div>
      <a href=" " className="view-all -translate-y-24 border-2 border-gray-300 p-3 rounded-xl whitespace-nowrap bg-my-custom-green hover:bg-black hover:text-white ">Browse All</a>
    </div>
  );
};

export default TopCategories;


