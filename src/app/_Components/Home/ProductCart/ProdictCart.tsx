import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowsRotate } from 'react-icons/fa6';
import { FaRegEye } from 'react-icons/fa6';
import { Root2 } from '@/api/types/product.type';
import { renderStars } from '../../StarsRat/StarsRate';
import ButtonForAddToCart from '../../ButtonForAddToCart/ButtonForAddToCart';
import ToggleBtnsInWishlist from '../../ToggleBtnsInWishlist/ToggleBtnsInWishlist';
export default function ProdictCart({ product }: { product: Root2 }) {
  function getDiscountPercentage(price: number, priceAfterDiscount: number) {
    return Math.round(((price - priceAfterDiscount) / price) * 100);
  }
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:-translate-y-1.25 transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={product.imageCover}
          width={800}
          height={500}
          alt={product.title}
          className="w-full h-60 object-contain bg-white"
        />
        {product.priceAfterDiscount && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{getDiscountPercentage(product.price, product.priceAfterDiscount)}%
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <ToggleBtnsInWishlist
            classesOne="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm cursor-pointer text-gray-600 hover:text-red-500"
            classesTwo="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm cursor-pointer text-red-600 hover:text-red-500"
            id={product.id}
          />
          <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 cursor-pointer shadow-sm">
            <FaArrowsRotate />
          </button>
          <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 cursor-pointer shadow-sm">
            <Link href={`/products/${product.id}`}>
              <FaRegEye />
            </Link>
          </button>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{product.category.name}</div>
          <h3 className="font-medium mb-1 cursor-pointer">
            <Link href={`/products/${product.id}`} className="line-clamp-2">
              {product.title}
            </Link>
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex text-amber-400 mr-2">
              <div className="flex gap-1 text-yellow-400 mr-2">
                {renderStars(product.ratingsAverage)}
              </div>
              <span className="text-xs text-gray-500">
                {product.ratingsAverage} {`(${product.ratingsQuantity})`}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {product.priceAfterDiscount ? (
                <>
                  <span className="text-lg font-bold text-green-600">
                    {product.priceAfterDiscount} EGP
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.price} EGP
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-800">{product.price} EGP</span>
              )}
            </div>
            <ButtonForAddToCart
              classes="h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70 cursor-pointer"
              icon="plus"
              id={product.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
