'use client';
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import {
  addAddresses,
  getAddresses,
  RemoveAddress,
  UpdateSpecificAddress,
} from '@/actions/userAddress.action';
import { AddAddressSchemaType, AddAddressSchema } from '@/schemas/auth.schema';
import { Controller, useForm } from 'react-hook-form';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCity } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { FaPen } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { AddressData } from '@/api/types/address.type';

export default function Profile() {
  const [addressData, setaddressData] = useState<AddressData | null>(null);

  const form = useForm<AddAddressSchemaType>({
    defaultValues: {
      name: '',
      details: '',
      phone: '',
      city: '',
    },
    resolver: zodResolver(AddAddressSchema),
  });
  const { handleSubmit, reset } = form;
  async function mySubmit(data: AddAddressSchemaType) {
    const res = await addAddresses(data);
    getAddressData();
    reset();
  }
  async function getAddressData() {
    const res = await getAddresses();
    setaddressData(res);
  }
  async function RemoveUserAddress(productId: string) {
    const res = await RemoveAddress(productId);
    if (res.status === 'success') {
      setaddressData(res);
      getAddressData();
    }
  }
  async function updateAddress(productId: string) {
    const res = await UpdateSpecificAddress(productId);
    if (res.status === 'success') {
      setaddressData(res);
      getAddressData();
    }
  }
  const handleDelete = async (id: string) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this address?");
  if (!confirmDelete) return;

  await RemoveUserAddress(id);
};
  useEffect(() => {
    getAddressData();
  }, []);
  return (
    <>
      <section className="min-h-screen bg-gray-50/50">
        <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
          <div className="container mx-auto px-4 py-10 sm:py-12">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
              <Link className="hover:text-white transition-colors" href="/">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">My Account</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ">
                <FaUser className="text-3xl" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">My Account</h1>
                <p className="text-white/80 mt-1">Manage your addresses and account settings</p>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container mx-auto px-4 py-8 min-h-screen">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <aside className="w-full lg:w-72 shrink-0">
                <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h2 className="font-bold text-gray-900">My Account</h2>
                  </div>
                  <ul className="p-2">
                    <li>
                      <Link
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-green-600 bg-green-50 hover:text-green-900"
                        href="/profile/addresses"
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white">
                          <FaMapMarkerAlt />
                        </div>
                        <span className="font-medium flex-1">My Addresses</span>
                        <IoIosArrowForward />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        href="/profile/settings"
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                          <IoSettingsSharp />
                        </div>
                        <span className="font-medium flex-1">Settings</span>
                        <IoIosArrowForward />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </aside>
              <main className="flex-1 min-w-0">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">My Addresses</h2>
                      <p className="text-gray-500 text-sm mt-1">
                        Manage your saved delivery addresses
                      </p>
                    </div>
                    <Dialog>
                      <DialogTrigger>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold cursor-pointer hover:bg-green-700 hover:text-white transition-colors shadow-lg shadow-green-600/25">
                          <FaPlus className="text-sm" />
                          Add Address
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg p-6 sm:p-8">
                        <form onSubmit={handleSubmit(mySubmit)}>
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-gray-900">
                              Add New Address
                            </DialogTitle>
                          </DialogHeader>
                          <FieldGroup className="mt-5">
                            <Controller
                              name="name"
                              control={form.control}
                              render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                  <Label htmlFor="address">Address Name</Label>
                                  <Input
                                    {...field}
                                    id="address"
                                    placeholder="e.g Home. Office"
                                    className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                  />
                                </Field>
                              )}
                            />
                            <Controller
                              name="details"
                              control={form.control}
                              render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                  <Label htmlFor="full-address">Full Address</Label>
                                  <Textarea
                                    {...field}
                                    id="full-address"
                                    placeholder="Street, building, apartment..."
                                    className="w-full! px-4! py-2! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                  />
                                </Field>
                              )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                              <Controller
                                name="phone"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                  <Field data-invalid={fieldState.invalid}>
                                    <Label htmlFor="phone-number">Phone Number</Label>
                                    <Input
                                      {...field}
                                      id="phone-number"
                                      placeholder="01xxxxxxxxx"
                                      className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                    />
                                  </Field>
                                )}
                              />
                              <Controller
                                name="city"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                  <Field data-invalid={fieldState.invalid}>
                                    <Label htmlFor="city">City</Label>
                                    <Input
                                      {...field}
                                      id="city"
                                      placeholder="Cairo"
                                      className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                    />
                                  </Field>
                                )}
                              />
                            </div>
                          </FieldGroup>

                          <DialogFooter className="flex items-center gap-3 pt-4 mt-4 bg-white border-0">
                            <DialogClose className="w-full py-3 flex-1 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors cursor-pointer">
                              Cancel
                            </DialogClose>
                            <DialogClose
                              type="submit"
                              className="cursor-pointer w-full flex-1 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
                            >
                              Add Address
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                  {/* loading */}
                  {!addressData && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Array(2)
                          .fill(0)
                          .map((_, idx) => (
                            <div
                              key={idx}
                              className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm animate-pulse"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4 flex-1">
                                  <div className="w-11 h-11 rounded-xl bg-gray-300 shrink-0"></div>
                                  <div className="flex-1 min-w-0 space-y-2 py-1">
                                    <div className="h-4 bg-gray-300 rounded w-3/5"></div>{' '}
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>{' '}
                                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>{' '}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-9 h-9 rounded-lg bg-gray-300"></div>{' '}
                                  <div className="w-9 h-9 rounded-lg bg-gray-300"></div>{' '}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                  {/* add addresses */}
                  {addressData?.ok && addressData?.data && addressData.data.length > 0 && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addressData.data.map((address) => (
                          <div
                            key={address._id}
                            className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-200 group"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4 flex-1">
                                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                                  <FaLocationDot className="text-lg text-green-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-bold text-gray-900 mb-1">{address.name}</h3>
                                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                    {address.details}
                                  </p>
                                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                      <FaPhone className="text-xs" />
                                      {address.phone}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                      <FaCity className="text-xs" />
                                      {address.city}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  className="w-9 h-9 rounded-lg bg-gray-100  cursor-pointer text-gray-600 hover:bg-green-100 hover:text-green-600 flex items-center justify-center transition-colors"
                                  title="Edit address"
                                >
                                  <FaPen className="text-sm" />
                                </button>
                                <button
                                  className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-100 cursor-pointer hover:text-red-600 flex items-center justify-center transition-colors disabled:opacity-50"
                                  title="Delete address"
                                  onClick={() => {
                                    handleDelete(address._id);
                                  }}
                                >
                                  <FaTrash className="text-sm" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {/* No Addresses Yet */}
                  {addressData?.ok && addressData?.data?.length === 0 && (
                    <>
                      <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                          <FaMapMarkerAlt className="text-3xl text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No Addresses Yet</h3>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                          Add your first delivery address to make checkout faster and easier.
                        </p>
                        <Dialog>
                          <DialogTrigger>
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 hover:text-white transition-colors shadow-lg shadow-green-600/25 cursor-pointer">
                              <FaPlus className="text-sm" />
                              Add Your First Address
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-lg p-6 sm:p-8">
                            <form onSubmit={handleSubmit(mySubmit)}>
                              <DialogHeader>
                                <DialogTitle className="text-xl font-bold text-gray-900">
                                  Add New Address
                                </DialogTitle>
                              </DialogHeader>
                              <FieldGroup className="mt-5">
                                <Controller
                                  name="name"
                                  control={form.control}
                                  render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                      <Label htmlFor="address">Address Name</Label>
                                      <Input
                                        {...field}
                                        id="address"
                                        placeholder="e.g Home. Office"
                                        className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                      />
                                    </Field>
                                  )}
                                />
                                <Controller
                                  name="details"
                                  control={form.control}
                                  render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                      <Label htmlFor="full-address">Full Address</Label>
                                      <Textarea
                                        {...field}
                                        id="full-address"
                                        placeholder="Street, building, apartment..."
                                        className="w-full! px-4! py-2! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                      />
                                    </Field>
                                  )}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                  <Controller
                                    name="phone"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                      <Field data-invalid={fieldState.invalid}>
                                        <Label htmlFor="phone-number">Phone Number</Label>
                                        <Input
                                          {...field}
                                          id="phone-number"
                                          placeholder="01xxxxxxxxx"
                                          className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                        />
                                      </Field>
                                    )}
                                  />
                                  <Controller
                                    name="city"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                      <Field data-invalid={fieldState.invalid}>
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                          {...field}
                                          id="city"
                                          placeholder="Cairo"
                                          className="w-full! px-4! py-6! rounded-xl! border! border-gray-200! focus:border-green-500! focus:ring-2! focus:ring-green-500/20! outline-none! transition-all!"
                                        />
                                      </Field>
                                    )}
                                  />
                                </div>
                              </FieldGroup>

                              <DialogFooter className="flex items-center gap-3 pt-4 bg-white border-0">
                                <DialogClose className="w-full flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors cursor-pointer">
                                  Cancel
                                </DialogClose>
                                <DialogClose
                                  type="submit"
                                  className="flex-1 w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors cursor-pointer disabled:opacity-50 shadow-lg shadow-green-600/25"
                                >
                                  Add Address
                                </DialogClose>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </>
                  )}
                </div>
              </main>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
