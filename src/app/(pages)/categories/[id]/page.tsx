import Link from 'next/link';
import React from 'react';
import { FaFolderOpen } from 'react-icons/fa6';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { getAllsubcategories, getSingleCategory } from '@/api/services/routemisr.service';
import PageHeader from '@/app/_Components/PageHeader/PageHeader';

export default async function category(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const subcategories = await getAllsubcategories();
  const category = await getSingleCategory(id);

  return (
    <>
      <PageHeader
        bgColor={'bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white'}
        container={'container mx-auto px-4 py-10 sm:py-16'}
        flexNav={'flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap'}
        imageStyle={'w-12 h-12 object-contain'}
        image={category?.image}
        linkName={category?.name}
        link={'/categories'}
        nameOfLink={'Categories'}
        h1={category?.name}
        desc={'Choose a subcategory to browse products'}
      />
      <section>
        <div className="min-h-screen bg-gray-50/50">
          <div className="container mx-auto px-4 py-10">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6"
            >
              <FaArrowLeftLong /> Back to Categories
            </Link>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                <span>{subcategories?.length}</span> Subcategories in{' '}
                <span>{category?.name || 'Category'}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {subcategories?.map((category) => (
                <Link
                  key={category._id}
                  href={`/singleSubcategories/${category._id}`}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                    <FaFolderOpen className="text-2xl text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Browse Products</span>
                    <FaLongArrowAltRight className="text-xs" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
