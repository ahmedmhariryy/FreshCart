'use client';
import React, { useState } from 'react';
import { FaArrowLeft, FaTruck } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { IoLockClosed } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { SpinnerCustom } from '@/app/_Components/ButtonSpinner/ButtonSpinner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { forgotPasswordSchema, forgotPasswordSchemaType } from '@/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { FaKey } from 'react-icons/fa';
import { forgotPasswords } from '@/actions/auth.action';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<forgotPasswordSchemaType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  });
  const { handleSubmit } = form;
  async function mySubmit(data: forgotPasswordSchemaType) {
    setLoading(true);
    const response = await forgotPasswords(data);
    if (response?.ok) {
      toast.success('Reset code sent to your email!');
      setTimeout(() => {
        router.push(`/forget-password/otp?email=${data.email}`);
      }, 1500);
    } else {
      toast.error(response?.data?.message || response?.error);
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
                <div className="w-full h-96 bg-linear-to-br from-green-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-green-100/50"></div>
                  <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50"></div>
                  <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50"></div>
                  <div className="relative flex flex-col items-center gap-6 z-10">
                    <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">
                        <IoLockClosed className="text-green-600 text-4xl" />
                      </div>
                    </div>
                    <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                      <MdEmail className="text-green-500 text-xl" />
                    </div>
                    <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                      <FaShieldAlt className="text-green-500 text-xl" />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:150ms]"></div>
                      <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse [animation-delay:300ms]"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">Reset Your Password</h2>
                  <p className="text-lg text-gray-600">
                    Don&apos;t worry, it happens to the best of us. We&lsquo;ll help you get back
                    into your account in no time.
                  </p>
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaTruck className="text-green-600 mr-2" /> Email Verification
                    </div>
                    <div className="flex items-center">
                      <FaShieldAlt className="text-green-600 mr-2" /> Secure Reset
                    </div>
                    <div className="flex items-center">
                      <IoLockClosed className="text-green-600 mr-2" /> Encrypted
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
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
                  <p className="text-gray-600">No worries, we&apos;ll send you a reset code</p>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100">
                      <MdEmail />
                    </div>
                    <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                      <FaKey />
                    </div>
                    <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                      <IoLockClosed />
                    </div>
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
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-6! px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <SpinnerCustom />
                        <span>Sending Code...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Reset Code</span>
                      </>
                    )}
                  </Button>
                  <div className="text-center">
                    <Link
                      className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                      href="/login"
                    >
                      <FaArrowLeft className="text-xs" />
                      Back to Sign In
                    </Link>
                  </div>
                </form>
                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-600">
                    Remember your password?{' '}
                    <Link
                      className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                      href="/login"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
