'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import ButtonForAddToCart from '@/app/_Components/ButtonForAddToCart/ButtonForAddToCart';
import { getLoggedUserWishlist, RemoveFromWishlist } from '@/actions/addToWishlist.action';
import { ForWishlist } from '@/api/types/wishlist.type';
import { WishlistContext } from '@/context/WishListContext';

export default function WishList() {
  const { numOfWishlistItems, setnumOfWishlistItems } = useContext(WishlistContext);
  const [productData, setproductData] = useState<null | ForWishlist>(null);
  const [updateLoading, setupdateLoading] = useState(false);
  const [addedToCart, setAddedToCart] = useState<string[]>([]);
  // getLoggedUserWishlist()
  async function getProductCart() {
    const res = await getLoggedUserWishlist();
    if (res.status === 'success') {
      setproductData(res);
      setnumOfWishlistItems(numOfWishlistItems);
    }
  }
  
  async function RemoveProductFromCart(productId: string, count: number) {
    setupdateLoading(true);
    const res = await RemoveFromWishlist(productId);
    if (res.status === 'success') {
      setproductData(res);
      setnumOfWishlistItems(numOfWishlistItems - count);
    }
    setupdateLoading(false);
  }
  useEffect(() => {
    getProductCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!productData) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-30">
        <div className="text-center">
          {/* Circle Background */}
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
            {/* Spinner */}
            <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          {/* Text */}
          <h2 className="text-gray-700 font-medium">Loading wishlist...</h2>
        </div>
      </div>
    );
  }
  return (
    <>
      {productData?.data && productData?.data?.length > 0 ? (
        <section className="min-h-screen bg-gray-50/50">
          <div className="bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 py-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link className="hover:text-green-600 transition-colors" href="/">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Wishlist</span>
              </nav>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <FaHeart className="text-xl text-red-500" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
                    <p className="text-gray-500 text-sm">
                      {productData?.count ?? 0}{' '}
                      {(productData?.count ?? 0) > 1 ? <span> items </span> : <span> item </span>}{' '}
                      saved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-2 text-center">Actions</div>
              </div>
              <div className="divide-y divide-gray-100">
                {productData?.data.map((product) => (
                  <div
                    key={product._id || product.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="md:col-span-6 flex items-center gap-4">
                      <Link
                        className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
                        href={`/products/${product.id}`}
                      >
                        <Image
                          width={200}
                          height={200}
                          alt={product.title}
                          className="w-full h-full object-contain p-2"
                          src={product.imageCover}
                        />
                      </Link>
                      <div className="min-w-0">
                        <Link
                          className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2"
                          href={`/products/${product.id}`}
                        >
                          {product.title}
                        </Link>
                        <p className="text-sm text-gray-400 mt-1">{product.category?.slug}</p>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                      <span className="md:hidden text-sm text-gray-500">Price:</span>
                      <div className="text-right md:text-center">
                        {product.priceAfterDiscount ? (
                          <>
                            <div className="font-semibold text-gray-900">
                              {product.priceAfterDiscount} EGP
                            </div>
                            <div className="text-sm text-gray-400 line-through">
                              {product.price} EGP
                            </div>
                          </>
                        ) : (
                          <div className="font-semibold text-gray-900">{product.price} EGP</div>
                        )}
                      </div>
                    </div>
                    <div className="md:col-span-2 flex md:justify-center">
                      <span className="md:hidden text-sm text-gray-500 mr-2">Status:</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {product.quantity > 0 ? <span>In Stock</span> : <span>Out of Stock</span>}
                      </span>
                    </div>
                    <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                      {addedToCart.includes(product.id) ? (
                        <Link
                          className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                          href="/cart"
                        >
                          <FaCheck className="text-xs text-green-600" />
                          <span className="md:hidden lg:inline">View Cart</span>
                        </Link>
                      ) : (
                        <div
                          onClick={() => {
                            setAddedToCart((prev) => [...prev, product.id]);
                          }}
                        >
                          <ButtonForAddToCart
                            classes="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-5 rounded-lg text-sm font-medium transition-all bg-green-600 text-white hover:bg-green-700"
                            word="Add to Cart"
                            wordStyle="md:hidden lg:inline"
                            icon="cart"
                            iconStyle="text-xs"
                            id={product.id}
                          />
                        </div>
                      )}
                      <button
                        disabled={updateLoading}
                        onClick={() => {
                          RemoveProductFromCart(product.id, 1);
                        }}
                        className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50 cursor-pointer"
                        title="Remove"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <Link
                className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors"
                href="/products"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="min-h-screen bg-gray-50/50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-sm mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <FaRegHeart className="text-3xl text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 text-sm mb-6">
                Browse products and save your favorites here. Sign in to sync your wishlist across
                devices.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                  href="/products"
                >
                  Browse Products <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
