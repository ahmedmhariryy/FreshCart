import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
import logo from '../../../assets/images/freshcart-logo.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="bg-green-50 border-y border-green-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <FaTruck className="text-green-600 text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Free Shipping</h4>
                <p className="text-gray-500 text-xs">On orders over 500 EGP</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <FaArrowRotateLeft className="text-green-600 text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Easy Returns</h4>
                <p className="text-gray-500 text-xs">14-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <FaShieldAlt className="text-green-600 text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Secure Payment</h4>
                <p className="text-gray-500 text-xs">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <FaHeadset className="text-green-600 text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">24/7 Support</h4>
                <p className="text-gray-500 text-xs">Contact us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white fixed-bottom">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-lg-12 text-gray-400">
            <div className="lg:col-span-4">
              <div className="bg-[#FFFFFF] py-2 px-4 w-fit rounded-lg mb-6">
                <Image className="w-auto" src={logo} alt="freshcart" />
              </div>
              <p className="mb-6 text-sm">
                FreshCart is your one-stop destination for quality products. From fashion to
                electronics, we bring you the best brands at competitive prices with a seamless
                shopping experience.
              </p>
              <div className="space-y-3 text-sm mb-6">
                <a href="tel:+1 (800) 123-4567" className="flex gap-2 items-center">
                  <FaPhoneAlt className="text-green-500" />
                  <span className="hover:text-green-500 cursor-pointer">+1 (800) 123-4567</span>
                </a>
                <a href="mailto:support@freshcart.com" className="flex gap-2 items-center">
                  <MdEmail className="text-green-500" />
                  <span className="hover:text-green-500 cursor-pointer">support@freshcart.com</span>
                </a>
                <div className="flex gap-2 items-center">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span className="hover:text-green-500 cursor-pointer">
                    123 Commerce Street, New York, NY 10001
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-green-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-green-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-green-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-green-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">Shop</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/products">All Products</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/categories">Categories</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/brands">Brands</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/singleSubcategories/6407f3a8b575d3b90bf957e2">Electronics</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/singleSubcategories/6407f243b575d3b90bf957ac">
                    {"Men's Fashion"}
                  </Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/singleSubcategories/6407f1bcb575d3b90bf95797">
                    {"Women's Fashion"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">Account</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/profile/addresses">My Account</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/profile/orders">Order History</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/wish-list">Wishlist</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/cart">Shopping Cart</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="login">Sign In</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="register">Create Account</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">Support</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/help">Help Center</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/shipping">Shipping Info</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/returns">Returns & Refunds</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/track-order">Track Order</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li className="hover:text-green-500 hover:cursor-pointer transition-colors">
                  <Link href="/cookies">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container flex flex-wrap justify-center md:justify-between mx-auto px-4 py-6 gap-4">
            <p className="text-gray-500 text-sm">© 2026 FreshCart. All rights reserved.</p>
            <div className="flex gap-5 text-sm">
              <div className="flex gap-2 items-center text-gray-500">
                <FaCreditCard />
                <span className="text-sm">Visa</span>
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <FaCreditCard />
                <span className="text-sm">Mastercard</span>
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <FaCreditCard />
                <span className="text-sm">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
