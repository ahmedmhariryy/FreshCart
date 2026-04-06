import Link from 'next/link';
import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';
export default function NoBroductsFound() {
  return (
    <>
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
          <FaBoxOpen className="text-3xl text-gray-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">No Products Found</h3>
        <p className="text-gray-500 mb-6">No products match your current filters.</p>
        <Link
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
          href="/products"
        >
          View All Products
        </Link>
      </div>
    </>
  );
}
