'use client';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FaBoxOpen, FaShoppingCart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { FaArrowRightLong, FaTrash } from 'react-icons/fa6';
import Image from 'next/image';
import { IoCheckmark } from 'react-icons/io5';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import {
  getLoggedUserCart,
  RemoveAllProductsFromCart,
  RemoveProduct,
  UpdateProductQuantity,
} from '@/actions/addToCart.action';
import { cartData } from '@/api/types/cart.type';
import { VscLoading } from 'react-icons/vsc';
import { FaBagShopping } from 'react-icons/fa6';
import { FaLock } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import { FaTag } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';
import { CartContext } from '@/context/CartContext';

export default function Cart() {
  const { numOfCartItems, setnumOfCartItems } = useContext(CartContext);

  const [productData, setproductData] = useState<null | cartData>(null);
  const [disabledUpdate, setdisabledUpdate] = useState(false);
  const [updateLoading, setupdateLoading] = useState(false);
  const [productIdLoading, setproductIdLoading] = useState<null | string>(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalForClearAll, setShowModalForClearAll] = useState(false);
  const maxPrice = 500;
  const currentPrice = productData?.totalCartPrice || 0;
  const progress = Math.min((currentPrice / maxPrice) * 100, 100);
  const remaining = maxPrice - currentPrice;
  const [cartId, setcartId] = useState('');

  async function getProductCart() {
    const res = await getLoggedUserCart();
    if (res.status === 'success') {
      setproductData(res.data);
      setcartId(res.cartId);
    }
  }
  async function updateProduct(productId: string, count: number, sign: string) {
    setproductIdLoading(productId);
    setdisabledUpdate(true);
    setupdateLoading(true);
    const res = await UpdateProductQuantity(productId, count);
    if (res.status === 'success') {
      setproductData(res.data);

      if (sign === '+') {
        setnumOfCartItems(numOfCartItems + 1);
      } else {
        setnumOfCartItems(numOfCartItems - 1);
      }
      setdisabledUpdate(false);
      setupdateLoading(false);
    } else {
      setdisabledUpdate(false);
      setupdateLoading(false);
    }
  }
  async function RemoveProductFromCart(productId: string, count: number) {
    setupdateLoading(true);
    setproductIdLoading(productId);
    const res = await RemoveProduct(productId);
    if (res.status === 'success') {
      setproductData(res.data);
      if (res.status === 'success') {
        setproductData(res.data);
        setnumOfCartItems(numOfCartItems - count);
        setupdateLoading(false);
      } else {
        setupdateLoading(false);
      }
    }
  }
  async function clearCart() {
    const res = await RemoveAllProductsFromCart();
    if (res.status === 'success') {
      setproductData(res.data);
      setnumOfCartItems(0);
    }
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProductCart();
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
          <h2 className="text-gray-700 font-medium">Loading your cart...</h2>
          <p className="text-gray-400 text-sm mt-1">Just a moment</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {productData?.products && productData?.products?.length > 0 ? (
        <>
          <section>
            <div className="bg-gray-50 min-h-screen py-8">
              <div className="container mx-auto px-4">
                <div className="mb-4">
                  <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Link className="hover:text-green-600 transition" href="/">
                      Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Shopping Cart</span>
                  </nav>
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                          <FaShoppingCart />
                        </span>
                        Shopping Cart
                      </h1>
                      <p className="text-gray-500 mt-2">
                        You have
                        <span className="font-semibold text-green-600">
                          {' '}
                          {productData?.products.length}
                          {productData?.products.length > 1 ? (
                            <span> items </span>
                          ) : (
                            <span> item </span>
                          )}
                        </span>
                        in your cart
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    {/* productData?.products.map */}
                    {productData?.products.map((product) => (
                      <div key={product.product.id} className="space-y-4 mt-4">
                        <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 ">
                          {updateLoading && productIdLoading === product.product.id && (
                            <div className="absolute inset-0 z-50 bg-white/70 backdrop-blur-[2px] flex items-center justify-center rounded-2xl">
                              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                                <VscLoading className="text-green-600 animate-spin" />
                                <span className="text-sm text-gray-600">Updating...</span>
                              </div>
                            </div>
                          )}
                          <div className="p-4 sm:p-5">
                            <div className="flex gap-4 sm:gap-6">
                              <Link
                                className="relative shrink-0 group"
                                href={`/products/${product.product.id}`}
                              >
                                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
                                  <Image
                                    width={112}
                                    height={112}
                                    alt={product.product.title}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    src={product.product.imageCover}
                                  />
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                                  <IoCheckmark className="text-[.5rem]" />
                                  {product.product.quantity > 0 ? (
                                    <span>In Stock</span>
                                  ) : (
                                    <span>Out of Stock</span>
                                  )}
                                </div>
                              </Link>
                              <div className="flex-1 min-w-0 flex flex-col">
                                <div className="mb-3">
                                  <Link
                                    className="group/title"
                                    href={`/products/${product.product.id}`}
                                  >
                                    <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg">
                                      {product.product.title}
                                    </h3>
                                  </Link>
                                  <div className="flex items-center gap-2 mt-2">
                                    <span className="inline-block px-2.5 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-medium rounded-full">
                                      {product.product.category.name}
                                    </span>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-500">
                                      SKU: {product.product.id.slice(-6).toUpperCase()}
                                    </span>
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="flex items-baseline gap-2">
                                    <span className="text-lg font-bold text-green-600">
                                      {product.price} EGP
                                    </span>
                                    <span className="text-xs text-gray-400">per unit</span>
                                  </div>
                                </div>
                                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                  <div className="flex items-center">
                                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                      <Button
                                        disabled={disabledUpdate || product.count <= 1}
                                        onClick={() =>
                                          updateProduct(product.product.id, product.count - 1, '-')
                                        }
                                        className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                                        aria-label="Decrease quantity"
                                      >
                                        <FiMinus className="text-xs" />
                                      </Button>
                                      <span className="w-12 text-center font-bold text-gray-900">
                                        {product.count}
                                      </span>
                                      <Button
                                        disabled={disabledUpdate}
                                        onClick={() =>
                                          updateProduct(product.product.id, product.count + 1, '+')
                                        }
                                        className="h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                        aria-label="Increase quantity"
                                      >
                                        <GoPlus className="text-xs" />
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <div className="text-right">
                                      <p className="text-xs text-gray-400 mb-0.5">Total</p>
                                      <p className="text-xl font-bold text-gray-900">
                                        {product.price * product.count}
                                        <span className="text-sm font-medium text-gray-400">
                                          {' '}
                                          EGP
                                        </span>
                                      </p>
                                    </div>
                                    <Button
                                      className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200"
                                      title="Remove item"
                                      aria-label="Remove from cart"
                                      onClick={() => setShowModal(true)}
                                    >
                                      <FaTrash className="text-sm" />
                                    </Button>
                                    {showModal && (
                                      <div
                                        onClick={() => setShowModal(false)}
                                        className="fixed inset-0 flex items-center justify-center bg-black/20 z-50"
                                      >
                                        <div
                                          onClick={(e) => e.stopPropagation()}
                                          className="bg-white rounded-xl p-6 w-96 text-center shadow-lg"
                                        >
                                          <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                            <FaTrash className="text-red-600" />
                                          </div>
                                          <h2 className="text-xl font-semibold mb-2">
                                            Remove Item?
                                          </h2>
                                          <p className="text-gray-500 text-sm mb-6">
                                            Remove{' '}
                                            <span className="font-semibold">
                                              {product.product.title}
                                            </span>{' '}
                                            from your cart?
                                          </p>
                                          <div className="flex justify-center gap-4">
                                            <button
                                              onClick={() => setShowModal(false)}
                                              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer"
                                            >
                                              Cancel
                                            </button>
                                            <button
                                              onClick={() => {
                                                RemoveProductFromCart(
                                                  product.product.id,
                                                  product.count,
                                                );
                                                setShowModal(false);
                                              }}
                                              className="px-4 cursor-pointer py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/*  */}
                    <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                      <Link
                        className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2"
                        href="/"
                      >
                        <span>←</span> Continue Shopping
                      </Link>
                      <Button
                        onClick={() => setShowModalForClearAll(true)}
                        className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 bg-gray-50"
                      >
                        <FaTrash className="text-xs group-hover:scale-110 transition-transform" />
                        <span>Clear all items</span>
                      </Button>
                      {showModalForClearAll && (
                        <div
                          onClick={() => setShowModalForClearAll(false)}
                          className="fixed inset-0 flex items-center justify-center bg-black/20 z-50"
                        >
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-xl p-6 w-96 text-center shadow-lg"
                          >
                            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                              <FaTrash className="text-red-600" />
                            </div>
                            <h2 className="text-lg font-semibold mb-2">Clear Your Cart?</h2>
                            <p className="text-gray-500 mb-6">
                              All items will be removed from your cart. This action cannot be
                              undone.
                            </p>
                            <div className="flex justify-center gap-4">
                              <button
                                onClick={() => setShowModalForClearAll(false)}
                                className="px-4 py-2 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200"
                              >
                                Keep Shopping
                              </button>
                              <button
                                onClick={() => {
                                  clearCart();
                                  setShowModalForClearAll(false);
                                }}
                                className="px-4 py-2 cursor-pointer rounded-lg bg-red-500 text-white hover:bg-red-600"
                              >
                                Yes, Clear All
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
                      <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                          <FaBagShopping />
                          Order Summary
                        </h2>
                        <p className="text-green-100 text-sm mt-1">
                          {productData?.products.length}
                          {productData?.products.length > 1 ? (
                            <span> items </span>
                          ) : (
                            <span> item </span>
                          )}
                          in your carts
                        </p>
                      </div>
                      <div className="p-6 space-y-5">
                        {currentPrice >= maxPrice ? (
                          <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                              <FaTruck className="text-green-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-green-700">Free Shipping!</p>
                              <p className="text-sm text-green-600">
                                You qualify for free delivery
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <FaTruck className="text-orange-500" />
                              <span className="text-sm font-medium text-gray-700">
                                Add <span>{remaining} EGP</span> for free shipping
                              </span>
                            </div>
                            {/* Progress Bar */}
                            <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-linear-to-r rounded-full transition-all duration-500 
                                ${
                                  progress > 80
                                    ? 'from-orange-600 to-amber-300'
                                    : progress > 40
                                      ? 'from-orange-500 to-amber-400'
                                      : 'from-orange-600 to-amber-500'
                                }`}
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        <div className="space-y-3">
                          <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span className="font-medium text-gray-900">
                              {productData.totalCartPrice} EGP
                            </span>
                          </div>
                          <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            {productData.totalCartPrice >= maxPrice ? (
                              <>
                                <span className="font-medium text-green-600">FREE</span>
                              </>
                            ) : (
                              <>
                                <span className="font-medium text-gray-900">50 EGP</span>
                              </>
                            )}
                          </div>
                          <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                            <div className="flex justify-between items-baseline">
                              <span className="text-gray-900 font-semibold">Total</span>
                              <div className="text-right">
                                <span className="text-2xl font-bold text-gray-900">
                                  {productData.totalCartPrice < maxPrice
                                    ? productData.totalCartPrice + 50
                                    : productData.totalCartPrice}
                                </span>
                                <span className="text-sm text-gray-500 ml-1">EGP</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all cursor-pointer">
                          <FaTag />
                          <span className="text-sm font-medium">Apply Promo Code</span>
                        </button>
                        <Link
                          className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                          href={`/cart/checkout/${cartId}`}
                        >
                          <FaLock />
                          <span>Secure Checkout</span>
                        </Link>
                        <div className="flex items-center justify-center gap-4 py-2">
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <FaShieldAlt className="text-green-500" />
                            <span>Secure Payment</span>
                          </div>
                          <div className="w-px h-4 bg-gray-200"></div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <FaTruck className="text-blue-500" />
                            <span>Fast Delivery</span>
                          </div>
                        </div>
                        <Link
                          className="block text-center text-green-600 hover:text-green-700 text-sm font-medium py-2"
                          href="/"
                        >
                          ← Continue Shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section>
          <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-sm mx-auto text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <FaBoxOpen className="text-5xl text-gray-300" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
              <p className="text-gray-500 mb-8 text-sm font-medium leading-relaxed">
                Looks like you haven&apos;t added anything to your cart yet.
                <br />
                Start exploring ourproducts!
              </p>
              <Link
                className="inline-flex items-center gap-2 bg-green-600 text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg active:scale-[0.98]"
                href="/"
              >
                Start Shopping <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
