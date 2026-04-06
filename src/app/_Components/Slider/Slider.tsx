'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function Slider({
  spaceBetween = 0,
  sliderPerView = 1,
  listOfSlides,
}: {
  spaceBetween?: number;
  sliderPerView?: number;
  listOfSlides: {
    image: string;
    title: string;
    desc: string;
    link: string;
    linkDesc: string;
    link2?: string;
    linkDesc2?: string;
    color?: string;
  }[];
}) {
  return (
    <Swiper
      className="h-100"
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={spaceBetween}
      slidesPerView={sliderPerView}
      navigation
      loop={true}
    >
      {listOfSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="h-100 flex items-center justify-center relative"
          >
            {/* Gradient overlay */}
            <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
              <div className="container p-4 md:px-18 h-full content-center">
                {/* Slide Title */}
                <h2 className="text-white text-3xl font-bold mb-4 max-w-96  ">{slide.title}</h2>
                {/* Slide Description */}
                <p className="text-white text-sm sm:text-base md:text-lg mb-4">{slide.desc}</p>
                {/* Buttons */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <Link
                    className={`px-4 py-2 rounded-md font-semibold text-[16px] bg-white border-2 border-white/50 ${
                      slide.color === 'green-500'
                        ? 'text-green-500'
                        : slide.color === 'blue-500'
                          ? 'text-blue-500'
                          : slide.color === 'purple-500'
                            ? 'text-purple-500'
                            : 'text-black'
                    }`}
                    href={slide.link}
                  >
                    {slide.linkDesc}
                  </Link>
                  {slide.link2 && slide.linkDesc2 && (
                    <Link
                      className="px-4 py-2 rounded-md font-semibold text-[16px] bg-transparent border-2 border-white/50 text-white"
                      href={slide.link2}
                    >
                      {slide.linkDesc2}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
