import { getAllProducts } from '@/api/services/routemisr.service';
import ProdictCart from '@/app/_Components/Home/ProductCart/ProdictCart';
import PageHeader from '@/app/_Components/PageHeader/PageHeader';
import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';

export default async function page() {
  const allProducts = await getAllProducts();
  return (
    <>
      <PageHeader
        bgColor={'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white'}
        container={'container mx-auto px-4 py-10 sm:py-14'}
        flexNav={'flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap'}
        linkName={'All Products'}
        iconStyle={'text-3xl'}
        icon={FaBoxOpen}
        h1={'All Products'}
        desc={'Explore our complete product collection'}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 text-sm text-gray-500">Showing {allProducts?.length} products</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allProducts?.map((product) => (
            <ProdictCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
