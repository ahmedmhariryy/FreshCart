import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBox } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { GoClockFill } from 'react-icons/go';
import { FaHashtag } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { getAllOrders } from '@/api/services/allorders.service';
import { FaBoxOpen } from 'react-icons/fa';
export default async function allorders() {
  const allOrders = await getAllOrders();
  return (
    <>
      {allOrders.length == 0 ? (
        <section>
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-sm text-center">
              <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <FaBoxOpen className="text-4xl text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                When you place orders, they&apos;ll appear here
                <br />
                so you can track them.
              </p>
              <Link
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 px-8 rounded-xl font-semibold transition-all shadow-lg shadow-green-600/20 w-full sm:w-auto"
                href="/"
              >
                <FaBagShopping />
                Start Shopping
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link className="hover:text-green-600 transition" href="/">
                  Home
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-medium">My Orders</span>
              </nav>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                    <FaBox className="text-2xl text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Orders</h1>
                    <p className="text-gray-500 text-sm mt-0.5">
                      Track and manage your {allOrders.length} orders
                    </p>
                  </div>
                </div>
                <Link
                  className="self-start sm:self-auto text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition-all text-sm"
                  href="/"
                >
                  <FaBagShopping className="text-xs" /> Continue Shopping
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {allOrders.map((order) => (
                <div
                  key={order._id}
                  className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex gap-5">
                      <div className="relative shrink-0">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-100 p-2.5 overflow-hidden">
                          <Image
                            width={60}
                            height={60}
                            alt={order.cartItems[0]?.title || ''}
                            className="w-full h-full object-contain"
                            src={
                              order.cartItems[0]?.image ||
                              'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg'
                            }
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                          +<span>{order.cartItems.length}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 rounded-lg mb-2">
                              <GoClockFill className="text-xs text-amber-600" />
                              <span className="text-xs font-semibold text-amber-600">
                                {order.isDelivered
                                  ? 'Delivered'
                                  : order.isPaid
                                    ? 'Processing'
                                    : 'Pending'}
                              </span>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                              <FaHashtag className="text-xs text-gray-400" />
                              {order.id}
                            </h3>
                          </div>
                          <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100">
                            <FaMoneyBill className="text-gray-600" />
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1.5">
                            <MdDateRange className="text-xs text-gray-400" />
                            {new Date(order.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="flex items-center gap-1.5">
                            <FaBox className="text-xs text-gray-400" /> {order.cartItems.length}{' '}
                            items
                          </span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="text-xs text-gray-400" />{' '}
                            {order.shippingAddress.city}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <span className="text-2xl font-bold text-gray-900">
                              {order.totalOrderPrice || 0}
                            </span>
                            <span className="text-sm font-medium text-gray-400 ml-1">EGP</span>
                          </div>
                          <button
                            type="button"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
