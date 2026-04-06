import { getAllCategory } from '@/api/services/routemisr.service';
import PageHeader from '@/app/_Components/PageHeader/PageHeader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaLayerGroup } from 'react-icons/fa';

export default async function categories() {
  const allCategory = await getAllCategory();
  return (
    <>
      <PageHeader
        bgColor={'bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white'}
        container={'container mx-auto px-4 py-10 sm:py-16'}
        flexNav={'flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap'}
        linkName={'Categories'}
        iconStyle={'text-3xl'}
        icon={FaLayerGroup}
        h1={'All Categories'}
        desc={'Browse our wide range of product categories'}
      />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {allCategory?.map((category) => (
            <Link key={category._id} href={`/categories/${category._id}`}>
              <div className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                  <Image
                    src={category.image}
                    width={800}
                    height={500}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-center group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>
                <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-orange-600 flex items-center gap-1">
                    View Subcategories <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
