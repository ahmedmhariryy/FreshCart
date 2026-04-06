import React from 'react';
import { MdHeadsetMic } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { HiMiniQuestionMarkCircle } from 'react-icons/hi2';
import Link from 'next/link';

export default function contact() {
  return (
    <>
      <section>
        <div className="min-h-screen bg-gray-50/50">
          <div className="bg-linear-to-br from-green-500 to-green-600 text-white">
            <div className="container mx-auto px-4 py-10 sm:py-14">
              <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
                <Link className="hover:text-white transition-colors" href="/">
                  Home
                </Link>
                <span className="text-white/40">/</span>
                <span className="text-white font-medium">Contact Us</span>
              </nav>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ">
                  <MdHeadsetMic className="text-3xl" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h1>
                  <p className="text-white/80 mt-1">
                    We&apos;d love to hear from you. Get in touch with our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                      <FaPhone className="text-green-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-500 text-sm mb-2">Mon-Fri from 8am to 6pm</p>
                      <a
                        href="tel:+18001234567"
                        className="text-green-500 font-medium hover:underline"
                      >
                        +1 (800) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                      <MdEmail className="text-green-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-500 text-sm mb-2">
                        We&lsquo;ll respond within 24 hours
                      </p>
                      <a
                        href="mailto:support@freshcart.com"
                        className="text-green-500 font-medium hover:underline"
                      >
                        support@freshcart.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-green-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                      <p className="text-gray-500 text-sm mb-2">
                        123 Commerce Street <br />
                        New York, NY 10001 <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                      <MdAccessTimeFilled className="text-green-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-500 text-sm mb-2">
                        Monday - Friday: 8am - 6pm <br />
                        Saturday: 9am - 4pm <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-500 hover:text-white transition-colors"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-500 hover:text-white transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-500 hover:text-white transition-colors"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-500 hover:text-white transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                      <MdHeadsetMic className="text-green-500 text-lg" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Send us a Message</h2>
                      <p className="text-gray-500 text-sm">
                        Fill out the form and we&apos;ll get back to you
                      </p>
                    </div>
                  </div>
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                          name="name"
                        ></input>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="john.doe@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                          name="email"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white mb-5"
                      >
                        <option selected>Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Support</option>
                        <option value="shipping">Shipping Question</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="product">Product Information</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none mb-5"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-green-500/20 cursor-pointer"
                    >
                      <IoIosSend />
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="mt-6 bg-green-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <HiMiniQuestionMarkCircle className="text-green-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Looking for quick answers?
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Check out our Help Center for frequently asked questions about orders,
                        shipping, returns, and more.
                      </p>
                      <Link
                        className="text-green-500 font-medium text-sm hover:underline inline-flex items-center gap-1"
                        href="/help"
                      >
                        Visit Help Center →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
