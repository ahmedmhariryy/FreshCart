'use client';
import React, { useContext } from 'react';
import logo from '../../../assets/images/freshcart-logo.svg';
import { FaTruck } from 'react-icons/fa';
import { IoIosGift } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { FaBars } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { FaRightFromBracket } from 'react-icons/fa6';
import { FaBoxOpen } from 'react-icons/fa';
import { FaRegAddressBook } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { signOut, useSession } from 'next-auth/react';
import { FaRegUserCircle } from 'react-icons/fa';
import { CartContext } from '@/context/CartContext';
import { WishlistContext } from '@/context/WishListContext';

export default function Navbar() {
  const { numOfCartItems, setnumOfCartItems } = useContext(CartContext);
  const { numOfWishlistItems, setnumOfWishlistItems } = useContext(WishlistContext);
  const { data: myData, status } = useSession();
  function mySignOut() {
    signOut({ redirect: true, callbackUrl: '/login' });
  }
  return (
    <>
      <div className="hidden lg:block text-sm relative bg-white  z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaTruck className="text-green-600" />
                Free Shipping on Orders 500 EGP
              </div>
              <div className="flex items-center gap-2">
                <IoIosGift className="text-green-600" />
                New Arrivals Daily
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="tel:+1 (800) 123-4567"
                  className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors"
                >
                  <FaPhoneAlt />
                  <span>+1 (800) 123-4567</span>
                </a>
                <a
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors"
                >
                  <MdOutlineMailOutline />
                  <span>support@freshcart.com</span>
                </a>
              </div>
              <span className="w-px h-4 bg-gray-200"></span>
              <div className="flex items-center gap-4">
                {status === 'unauthenticated' ? (
                  <>
                    <Link
                      className="flex items-center gap-2 hover:text-green-600 transition-colors"
                      href="/login"
                    >
                      <FiUser />
                      <span>Sign In</span>
                    </Link>
                    <Link
                      className="flex items-center gap-2 hover:text-green-600 transition-colors"
                      href="/register"
                    >
                      <FaUserPlus />
                      <span>Sign Up</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors"
                      href="/profile/addresses"
                    >
                      <FiUser className="text-md" />
                      <span>{myData?.user?.name}</span>
                    </Link>
                    <button
                      onClick={mySignOut}
                      className="flex items-center gap-1.5 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <FaRightFromBracket className="text-xs" />
                      <span>Sign Out</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
            <Link href="/">
              <Image className="w-auto" src={logo} alt="freshcart" />
            </Link>
            <form className="hidden lg:flex flex-1 max-w-2xl">
              <Field orientation="horizontal" className="relative ">
                <Input
                  type="search"
                  className="w-full! px-5! py-5! pr-12! rounded-full! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm"
                  placeholder="Search for products, brands and more..."
                />
                <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                  <FaSearch />
                </Button>
              </Field>
            </form>
            <nav className="hidden xl:flex items-center gap-5">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Shop
              </Link>
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 hover:bg-white font-medium transition-colors">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md cursor-pointer">
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-50">
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href="/categories">All Categories</Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href={`/singleSubcategories/6407f3a8b575d3b90bf957e2`}>
                            Electronics
                          </Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href={`/singleSubcategories/6407f1bcb575d3b90bf95797`}>
                            {"Women's Fashion"}
                          </Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href={`/singleSubcategories/6407f243b575d3b90bf957ac`}>
                            {"Men's Fashion"}
                          </Link>
                        </li>
                        <li className="px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                          <Link href={`/singleSubcategories/6407f0cbb575d3b90bf95779`}>
                            Beauty & Health
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href="/brands"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Brands
              </Link>
            </nav>
            <div className="flex items-center gap-1 lg:gap-2">
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <FaHeadset className=" text-green-500" />
                </div>
                <div className="text-xs">
                  <div>
                    <div className="text-gray-400">Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div>
                  </div>
                </div>
              </Link>
              <Link
                href="/wish-list"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <FaRegHeart className=" text-xl text-gray-500 group-hover:text-green-600 transition-colors" />
                {numOfWishlistItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    {numOfWishlistItems}
                  </span>
                )}
              </Link>
              <Link
                href="/cart"
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <FaCartShopping className=" text-xl text-gray-500 group-hover:text-green-600 transition-colors" />
                {numOfCartItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    {numOfCartItems}
                  </span>
                )}
              </Link>
              {status === 'unauthenticated' ? (
                <>
                  <Link
                    href="/login"
                    className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-green-600/20"
                  >
                    <FiUser />
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hidden lg:flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors cursor-pointer">
                      <div className="flex items-center justify-center  w-10 h-10 rounded-full hover:bg-gray-100 transition-colors group border-0">
                        <FaRegUserCircle className="text-xl text-gray-500 group-hover:text-green-600 transition-colors" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuLabel className="flex items-center gap-3 p-4 border-b mb-1 border-gray-100">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <FaRegUserCircle className="text-xl text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 truncate">
                              {myData?.user?.name}
                            </p>
                            <p className="font-semibold text-gray-500 truncate">
                              {myData?.user?.email}
                            </p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/profile/addresses"
                          >
                            <FiUser className="w-4 text-gray-400" />
                            My Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/allorders"
                          >
                            <FaBoxOpen className="w-4 text-gray-400" />
                            My Orders
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/wish-list"
                          >
                            <FaRegHeart className="w-4 text-gray-400" />
                            My Wishlist
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/profile/addresses"
                          >
                            <FaRegAddressBook className="w-4 text-gray-400" />
                            Addresses
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                            href="/profile/settings"
                          >
                            <IoMdSettings className="w-4 text-gray-400" />
                            Settings
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <div
                          onClick={mySignOut}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:text-red-500 hover:bg-red-50 transition-colors w-full text-left cursor-pointer"
                        >
                          <FaRightFromBracket className="text-xs" />
                          <span>Sign Out</span>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
              <Sheet>
                <SheetTrigger className="lg:hidden cursor-pointer ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors">
                  <FaBars />
                </SheetTrigger>
                <SheetContent className="lg:hidden w-80! right-0! max-w-[85vw] overflow-y-auto!">
                  <SheetHeader className="border-b border-gray-100">
                    <SheetTitle>
                      <Image className="w-auto" src={logo} alt="freshcart" />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <form className="flex flex-1 max-w-2xl pb-4 border-b border-gray-100">
                      <Field orientation="horizontal" className="relative ">
                        <Input
                          type="search"
                          className="w-full! px-5! py-6! pr-12! rounded-xl! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm"
                          placeholder="Search products..."
                        />
                        <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                          <FaSearch />
                        </Button>
                      </Field>
                    </form>
                    <nav>
                      <div className="space-y-1 flex flex-col">
                        <SheetClose>
                          <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Home
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="/products"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Shop
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="/categories"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Categories
                          </Link>
                        </SheetClose>

                        <SheetClose>
                          <Link
                            href="/brands"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            Brands
                          </Link>
                        </SheetClose>
                      </div>
                    </nav>
                    <div className="mx-4 border-t border-gray-100"></div>
                    <div className="flex flex-col">
                      <SheetClose>
                        <Link
                          href="/wish-list"
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                              <FaRegHeart className="text-red-500 text-lg" />
                            </div>
                            <span className="font-medium text-gray-700">Wishlist</span>
                          </div>
                        </Link>
                      </SheetClose>
                      <SheetClose>
                        <Link
                          href="/cart"
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-md">
                              <FaCartShopping className="text-green-600 text-lg" />
                            </div>
                            <span className="font-medium text-gray-700">Cart</span>
                          </div>
                        </Link>
                      </SheetClose>
                    </div>
                    {status === 'unauthenticated' ? (
                      <>
                        <div className="space-y-1">
                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <SheetClose className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                              <Link href="/login">Sign In</Link>
                            </SheetClose>
                            <SheetClose className="flex items-center cursor-pointer justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors">
                              <Link href="/register">Sign Up</Link>
                            </SheetClose>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col space-y-1 border-t border-gray-100 py-4">
                          <SheetClose>
                            <Link
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
                              href="/profile/addresses"
                            >
                              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                                <FiUser className="text-gray-500" />
                              </div>
                              <span className="font-medium text-gray-700">
                                {myData?.user?.name}
                              </span>
                            </Link>
                          </SheetClose>
                          <SheetClose>
                            <button
                              onClick={mySignOut}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors w-full text-left cursor-pointer"
                            >
                              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                                <FaRightFromBracket className="text-red-500" />
                              </div>
                              <span className="font-medium text-red-600">Sign Out</span>
                            </button>
                          </SheetClose>
                        </div>
                      </>
                    )}
                    <SheetClose>
                      <Link
                        href="/contact"
                        className="mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <FaHeadset className="text-lg text-green-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-start text-gray-700">
                            Need Help?
                          </div>
                          <div className="text-sm text-green-600">Contact Support</div>
                        </div>
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
