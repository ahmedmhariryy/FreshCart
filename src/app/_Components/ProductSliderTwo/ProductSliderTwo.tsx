'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProdictCart from '../Home/ProductCart/ProdictCart';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function ProductSwiper({ products }: { products: any[] }) {
  const swiperRef = useRef<any>(null);

  return (
    <div>
      <div className="flex gap-2 justify-center absolute top-0 right-0 z-10 px-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition cursor-pointer text-xl"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition cursor-pointer text-xl"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // حفظ instance
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product._id}>
            <ProdictCart product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
