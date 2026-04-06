import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import { getAllCategory } from '@/api/services/routemisr.service';
export default async function ShopByCategory() {
  const allCategory = await getAllCategory();
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
            <div className="flex  items-center gap-3 my-8">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Shop By <span className="text-emerald-600">Category</span>
              </h2>
            </div>
            <Link
              href="\categories"
              className="text-green-600 self-end sm:self-auto hover:text-green-700 font-medium flex items-center cursor-pointer"
            >
              View All Categories <FaArrowRightLong className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allCategory?.map((category) => (
              <Link key={category._id} href={`/categories/${category._id}`} className="">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer">
                  <div className="h-20 w-20 overflow-hidden bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition">
                    <Image
                      src={category.image}
                      width={800}
                      height={500}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 text-white opacity-100 transform-none">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span>🔥</span>
                  <span>Deal of the Day</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Fresh Organic Fruits</h3>
                <p className="text-white/80 mb-4">Get up to 40% off on selected organic fruits</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold">40% OFF</div>
                  <div className="text-sm text-white/70">
                    Use code: <span className="font-bold text-white">ORGANIC40</span>
                  </div>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Shop Now <FaArrowRightLong />
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden opacity-100 transform-none rounded-2xl bg-linear-to-br from-orange-400 to-rose-500 p-8 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span>✨</span>
                  <span>New Arrivals</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Exotic Vegetables</h3>
                <p className="text-white/80 mb-4">
                  Discover our latest collection of premium vegetables
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold">25% OFF</div>
                  <div className="text-sm text-white/70">
                    Use code: <span className="font-bold text-white">FRESH25</span>
                  </div>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Now <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
