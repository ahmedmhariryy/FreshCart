'use client';
import React, { useState } from 'react';
import image3 from '../../../../assets/images/image3.png';
import Image from 'next/image';
import { FaTruck } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { FaShieldAlt } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { IoLockClosed } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { SpinnerCustom } from '@/app/_Components/ButtonSpinner/ButtonSpinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginSchema, LoginSchemaType } from '@/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<LoginSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  });
  const { handleSubmit } = form;
  async function mySubmit(data: LoginSchemaType) {
    setLoading(true);
    const response = await signIn('credentials', { ...data, redirect: false, callbackUrl: '/' });
    if (response?.ok) {
      toast.success('Hey! Good to see you Welcome back! You are now logged in ❤️💕');
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } else {
      toast.error(response?.error);
    }
    setLoading(false);
  }
  return (
    <>
      <section>
        <div className="container py-16 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="hidden lg:block">
              <div className="text-center space-y-6">
                <Image
                  src={image3}
                  alt="login image"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">
                    FreshCart - Your One-Stop Shop for Fresh Products
                  </h2>
                  <p className="text-lg text-gray-600">
                    Join thousands of happy customers who trust FreshCart for their daily grocery
                    needs
                  </p>
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaTruck className="text-green-600 mr-2" /> Free Delivery
                    </div>
                    <div className="flex items-center">
                      <FaShieldAlt className="text-green-600 mr-2" /> Secure Payment
                    </div>
                    <div className="flex items-center">
                      <MdOutlineAccessTimeFilled className="text-green-600 mr-2" /> 24/7 Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-green-600">
                      Fresh<span className="text-gray-800">Cart</span>
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
                  <p className="text-gray-600">
                    Sign in to continue your fresh shopping experience
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 cursor-pointer"
                  >
                    <FaGoogle className="me-2 text-red-600 text-lg" />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 cursor-pointer"
                  >
                    <FaFacebook className="me-2 text-blue-600 text-lg" />
                    <span className="font-medium text-gray-700">Continue with Facebook</span>
                  </button>
                </div>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">
                      OR CONTINUE WITH EMAIL
                    </span>
                  </div>
                </div>
                <form onSubmit={handleSubmit(mySubmit)} className="space-y-6 text-[#364153]">
                  <div className="relative flex flex-col gap-2">
                    <MdEmail className="absolute left-4 top-9.5 text-xl text-gray-400" />
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <Input
                            {...field}
                            id="email"
                            className="pl-10! py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter your email"
                          />
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                  </div>
                  <div className="relative flex flex-col gap-2">
                    <IoLockClosed className="absolute left-4 top-9.5 text-xl text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-9.5 text-xl cursor-pointer text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <Controller
                      name="password"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <div className="flex items-center justify-between">
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Link
                              className="text-sm text-green-600 hover:text-green-700 cursor-pointer font-medium"
                              href="/forget-password"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                          <Input
                            {...field}
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter your password"
                            className="pl-10! py-5! rounded-md! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/0! focus:border-green-500! transition-all! text-[16px]"
                          />
                          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                      )}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="terms" className="size-4 accent-green-600" />
                      <label htmlFor="terms">Keep me signed in</label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="btn bg-green-600 text-white hover:bg-green-700 py-5 w-full transition-colors cursor-pointer text-[16px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <SpinnerCustom />
                        <span>Sing In...</span>
                      </>
                    ) : (
                      <>
                        <span>Sing In</span>
                      </>
                    )}
                  </Button>
                </form>
                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-600">
                    New to FreshCart?{' '}
                    <Link
                      className="text-green-600 hover:text-green-700 ms-2 font-semibold cursor-pointer"
                      href="/register"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-6 mt-6 text-xs md:text-sm text-gray-500">
                  <div className="flex items-center">
                    <IoLockClosed className="mr-1" />
                    SSL Secured
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1" />
                    50K+ Users
                  </div>
                  <div className="flex items-center">
                    <FaStar className="mr-1" />
                    4.9 Rating
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
