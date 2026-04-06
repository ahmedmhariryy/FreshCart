import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
import Slider from '../Slider/Slider';
import image1 from '../../../assets/images/image1.png';

export default function SliderComponent() {
  const slides = [
    {
      image: image1.src,
      title: 'Fresh Products Delivered to your Door',
      desc: 'Get 20% off your first order',
      link: '/products',
      linkDesc: 'Shop Now',
      link2: '/deals',
      linkDesc2: 'View Deals',
      color: 'green-500',
    },
    {
      image: image1.src,
      title: 'Premium Quality Guaranteed',
      desc: 'Fresh from farm to your table',
      link: '/products',
      linkDesc: 'Shop Now',
      link2: '/about',
      linkDesc2: 'Learn More',
      color: 'blue-500',
    },
    {
      image: image1.src,
      title: 'Fast & Free Delivery',
      desc: 'Same day delivery available',
      link: '/products',
      linkDesc: 'Order Now',
      link2: '/delivery',
      linkDesc2: 'Delivery Info',
      color: 'purple-500',
    },
  ];
  return (
    <>
      {/* add slider her */}
      <section className="relative">
        <div>
          <Slider
            spaceBetween={0}
            sliderPerView={1}
            listOfSlides={slides}
          />
        </div>
      </section>
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-50 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ">
                <FaTruck className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Free Shipping</h3>
                <p className="text-xs text-gray-500">On orders over 500 EGP</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-50 text-green-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ">
                <FaShieldAlt className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Secure Payment</h3>
                <p className="text-xs text-gray-500">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-orange-50 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ">
                <FaArrowRotateLeft className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Easy Returns</h3>
                <p className="text-xs text-gray-500">14-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-purple-50 text-purple-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ">
                <FaHeadset className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">24/7 Support</h3>
                <p className="text-xs text-gray-500">Dedicated support team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
