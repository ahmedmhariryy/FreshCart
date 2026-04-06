import { getAllBrands } from '@/api/services/routemisr.service';
import PageHeader from '@/app/_Components/PageHeader/PageHeader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaTags } from "react-icons/fa";
import { FaLongArrowAltRight } from 'react-icons/fa';
export default async function Brands() {
  const allBrands = await getAllBrands();
  return (
    <>
      <PageHeader
        bgColor={'bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400 text-white'}
        container={'container mx-auto px-4 py-12 sm:py-16'}
        flexNav={'flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap'}
        linkName={'Brands'}
        iconStyle={'text-3xl'}
        icon={FaTags}
        h1={'Top Brands'}
        desc={'Shop from your favorite brands'}
      />
      <section>
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {allBrands?.map((brand) => (
              <Link
                key={brand._id}
                className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
                href={`/brands/${brand._id}`}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
                  <Image
                    src={brand.image}
                    width={200}
                    height={200}
                    alt={brand.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
                  {brand.name}
                </h3>
                <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-violet-600 flex items-center gap-1">
                    View Product <FaLongArrowAltRight className="text-[10px]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
