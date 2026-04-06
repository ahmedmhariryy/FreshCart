'use client';
import React, { useState, useContext, useEffect } from 'react';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { SpinnerCustom } from '@/app/_Components/ButtonSpinner/ButtonSpinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaReceipt } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa6';
import { IoMdInformationCircle } from 'react-icons/io';
import { FaCity } from 'react-icons/fa';
import { cheackoutSchema, cheackoutSchemaType } from '@/schemas/checkout.schema';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Textarea } from '@/components/ui/textarea';
import { FaPhone } from 'react-icons/fa6';
import { FaWallet } from 'react-icons/fa';
import { RiCashFill } from 'react-icons/ri';
import Image from 'next/image';
import imageVisa from '@/assets/images/visa.png';
import imageMasterCard from '@/assets/images/masterCard.png';
import imageAMEX from '@/assets/images/amex.png';
import { FaShieldAlt } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { FaTruck } from 'react-icons/fa';
import { FaBox } from 'react-icons/fa';
import { cashOrder, onlinPayment } from '@/actions/checkout.action';
import { useParams, useRouter } from 'next/navigation';
import { CartContext } from '@/context/CartContext';
import { getLoggedUserCart } from '@/actions/addToCart.action';
import { cartData } from '@/api/types/cart.type';

export default function CheackOut() {
  const router = useRouter();

  const { setnumOfCartItems } = useContext(CartContext);
  const { id }: { id: string } = useParams();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online'>('cash');
  const [cartData, setCartData] = useState<null | cartData>(null);

  useEffect(() => {
    async function fetchCart() {
      const res = await getLoggedUserCart();
      if (res.status === 'success') {
        setCartData(res.data);
      }
      console.log(res.data);
    }

    fetchCart();
  }, []);
  const form = useForm<cheackoutSchemaType>({
    defaultValues: {
      details: '',
      phone: '',
      city: '',
    },
    resolver: zodResolver(cheackoutSchema),
  });
  const { handleSubmit } = form;
  async function mySubmit(data: cheackoutSchemaType) {
    setLoading(true);
    if (paymentMethod === 'cash') {
      const res = await cashOrder(id, data);
      console.log(res);
      if (res.status === 'success') {
        setnumOfCartItems(0);
        router.push('/');
      }
    } else {
      const res = await onlinPayment(id, '', data);
      if (res.status === 'success') {
        // eslint-disable-next-line react-hooks/immutability
        window.location.href = res.session.url;
      }
    }
    setLoading(false);
  }
  return (
    <>
      <section className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link className="hover:text-green-600 transition" href="/">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <Link className="hover:text-green-600 transition" href="/cart">
                Cart
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium">Checkout</span>
            </nav>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="bg-linear-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20">
                    <FaReceipt />
                  </span>
                  Complete Your Order
                </h1>
                <p className="text-gray-500 mt-2">Review your items and complete your purchase</p>
              </div>
              <Link
                className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all"
                href="/cart"
              >
                <FaArrowLeftLong /> Back to Cart
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit(mySubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <GoHomeFill />
                      Shipping Address
                    </h2>
                    <p className="text-green-100 text-sm mt-1">
                      Where should we deliver your order?
                    </p>
                  </div>
                  <div className="p-6 space-y-5">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <IoMdInformationCircle className="text-blue-600 text-sm" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-800 font-medium">Delivery Information</p>
                        <p className="text-xs text-blue-600 mt-0.5">
                          Please ensure your address is accurate for smooth delivery
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col gap-2">
                      <div className="absolute left-4 top-9 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <FaCity className="text-sm text-gray-500" />
                      </div>
                      <Controller
                        name="city"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="City">
                              City<span className="text-red-500">*</span>
                            </FieldLabel>
                            <Input
                              {...field}
                              id="City"
                              className="pl-14! py-6! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                              aria-invalid={fieldState.invalid}
                              placeholder="e.g. Cairo, Alexandria, Giza"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                          </Field>
                        )}
                      />
                    </div>
                    <div className="relative flex flex-col gap-2">
                      <div className="absolute left-4 top-9 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-sm text-gray-500" />
                      </div>
                      <Controller
                        name="details"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="details">
                              Street Address <span className="text-red-500">*</span>
                            </FieldLabel>
                            <Textarea
                              {...field}
                              id="details"
                              className="pl-14! min-h-[100px] py-4! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                              aria-invalid={fieldState.invalid}
                              placeholder="Street name, building number, floor, apartment..."
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                          </Field>
                        )}
                      />
                    </div>
                    <div className="relative flex flex-col gap-2">
                      <div className="absolute left-4 top-9 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <FaPhone className="text-sm text-gray-500" />
                      </div>
                      <span className="absolute right-4 top-11 text-xs text-gray-400">
                        Egyptian numbers only
                      </span>
                      <Controller
                        name="phone"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="phone">
                              Phone Number <span className="text-red-500">*</span>
                            </FieldLabel>
                            <Input
                              {...field}
                              id="phone"
                              type="tel"
                              className="pl-14! py-6! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                              aria-invalid={fieldState.invalid}
                              placeholder="01xxxxxxxxx"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                          </Field>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FaWallet />
                      Payment Method
                    </h2>
                    <p className="text-green-100 text-sm mt-1">Choose how you&apos;d like to pay</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cash')}
                      className={`w-full p-5 cursor-pointer rounded-xl border-2 flex items-center gap-4 transition-all
    ${
      paymentMethod === 'cash'
        ? 'border-green-500 bg-green-50'
        : 'border-gray-200 hover:border-green-200 hover:bg-gray-50'
    }
  `}
                    >
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all
    ${
      paymentMethod === 'cash'
        ? 'bg-green-100 text-green-400 group-hover:bg-green-200'
        : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
    }
  `}
                      >
                        <RiCashFill />
                      </div>
                      <div className="flex-1 text-left">
                        <h3
                          className={`${paymentMethod === 'cash' ? 'font-bold text-gray-900' : 'font-bold text-green-900'}`}
                        >
                          Cash on Delivery
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Pay when your order arrives at your doorstep
                        </p>
                      </div>
                      {paymentMethod === 'cash' ? (
                        <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white">
                          <FaCheck className="text-xs" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200"></div>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('online')}
                      className={`w-full p-5 cursor-pointer rounded-xl border-2 flex items-center gap-4 transition-all
    ${
      paymentMethod === 'online'
        ? 'border-green-500 bg-green-50'
        : 'border-gray-200 hover:border-green-200 hover:bg-gray-50'
    }
  `}
                    >
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all
    ${
      paymentMethod === 'online'
        ? 'bg-green-100 text-green-400 group-hover:bg-green-200'
        : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
    }
  `}
                      >
                        <RiCashFill />
                      </div>
                      <div className="flex-1 text-left">
                        <h3
                          className={`${paymentMethod === 'online' ? 'font-bold text-gray-900' : 'font-bold text-green-900'}`}
                        >
                          Pay Online
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Secure payment with Credit/Debit Card via Stripe
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Image className="h-5 w-5" src={imageVisa} alt="Visa" />
                          <Image className="h-5 w-5" src={imageMasterCard} alt="Master Card" />
                          <Image className="h-5 w-5" src={imageAMEX} alt="Amex" />
                        </div>
                      </div>
                      {paymentMethod === 'online' ? (
                        <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white">
                          <FaCheck className="text-xs" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200"></div>
                      )}
                    </button>
                    <div className="flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <FaShieldAlt className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">Secure & Encrypted</p>
                        <p className="text-xs text-green-600 mt-0.5">
                          Your payment info is protected with 256-bit SSL encryption
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                  <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FaBagShopping />
                      Order Summary
                    </h2>
                    <p className="text-green-100 text-sm mt-1">
                      {cartData?.products?.length}
                      {(cartData?.products?.length ?? 0) > 1 ? (
                        <span> items </span>
                      ) : (
                        <span> item </span>
                      )}
                    </p>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                      {!cartData
                        ? 
                          Array.from({ length: 2 }).map((_, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 transition-colors animate-pulse"
                            >
                              <div className="w-14 h-14 rounded-lg bg-gray-200 p-1 border border-gray-100 shrink-0"></div>
                              <div className="flex-1 min-w-0 space-y-2 py-1">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                              </div>
                              <div className="h-4 w-10 bg-gray-200 rounded shrink-0"></div>
                            </div>
                          ))
                        :
                          cartData.products.map((product) => (
                            <div
                              key={product.product.id}
                              className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                              <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                                <Image
                                  alt={product.product.title}
                                  width={60}
                                  height={60}
                                  className="w-full h-full object-contain"
                                  src={product.product.imageCover}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {product.product.title}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {product.count} × {product.price} EGP
                                </p>
                              </div>
                              <p className="text-sm font-bold text-gray-900 shrink-0">
                                {product.count * product.price}
                              </p>
                            </div>
                          ))}
                    </div>
                    <hr className="border-gray-100 my-4" />
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium">{cartData?.totalCartPrice ?? 0} EGP</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span className="flex items-center gap-2">
                          <FaTruck className="text-gray-400" />
                          Shipping
                        </span>
                        {(cartData?.totalCartPrice ?? 0) > 499 ? (
                          <span className="text-green-600 font-semibold">FREE</span>
                        ) : (
                          <span className="font-medium">50 EGP</span>
                        )}
                      </div>
                      <hr className="border-gray-100" />
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <div className="text-right">
                          {(cartData?.totalCartPrice ?? 0) > 499 ? (
                            <span className="text-2xl font-bold text-green-600">
                              {cartData?.totalCartPrice ?? 0}
                            </span>
                          ) : (
                            <span className="text-2xl font-bold text-green-600">
                              {(cartData?.totalCartPrice ?? 0) + 50}
                            </span>
                          )}
                          <span className="text-sm text-gray-500 ml-1">EGP</span>
                        </div>
                      </div>
                    </div>
                    {paymentMethod === 'online' && (
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-6 bg-linear-to-r from-green-600 to-green-700 text-white py-6 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                      >
                        {loading ? (
                          <>
                            <SpinnerCustom />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <FaShieldAlt /> <span>Proceed to Payment</span>
                          </>
                        )}
                      </Button>
                    )}
                    {paymentMethod === 'cash' && (
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-6 bg-linear-to-r from-green-600 to-green-700 text-white py-6 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                      >
                        {loading ? (
                          <>
                            <SpinnerCustom />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <FaBox /> <span>Place Order</span>
                          </>
                        )}
                      </Button>
                    )}

                    <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaShieldAlt className="text-green-500" /> <span>Secure</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200"></div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaTruck className="text-blue-500" /> <span>Fast Delivery</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200"></div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaBox className="text-orange-500" /> <span>Easy Returns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
