import React from 'react';
import { renderStars } from '@/app/_Components/StarsRat/StarsRate';
import { getSingleProduct, getSingleSubcategories } from '@/api/services/routemisr.service';
import Quantity from '@/app/_Components/SingleProduct/Quantity/Quantity';
import AddToCartButtons from '@/app/_Components/SingleProduct/AddToCartButtons/AddToCartButtons';
import { FaTruckFast } from 'react-icons/fa6';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';
import MyGallery from './../../../_Components/ProductSlider/ProductSlider';
import { TabsDemo } from '@/app/_Components/ProductTab/ProdcutTab';
import ProductSwiper from '@/app/_Components/ProductSliderTwo/ProductSliderTwo';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { FaHouse } from 'react-icons/fa6';

export default async function products(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  function getDiscountPercentage(price: number, priceAfterDiscount: number) {
    return Math.round(((price - priceAfterDiscount) / price) * 100);
  }
  const singleProduct = await getSingleProduct(id);
  const relatedProducts = await getSingleSubcategories(singleProduct.subcategory[0]._id);
  return (
    <>
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              {/* Home */}
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-gray-500 hover:text-green-600 flex items-center gap-1.5"
                  href="/"
                >
                  <FaHouse /> Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {/* Category */}
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-gray-500 hover:text-green-600"
                  href={`/categories/${singleProduct.category._id}`}
                >
                  {singleProduct.category.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {/* SubCategory */}
              <BreadcrumbItem>
                {/* <BreadcrumbLink
                  className="text-gray-500 hover:text-green-600"
                  href={`/subcategories/${singleProduct.subcategory[0]?._id}`}
                >
                  {singleProduct.subcategory[0]?.name}
                </BreadcrumbLink> 
                <BreadcrumbItem> */}
                <div className="text-gray-500 hover:text-green-600 cursor-pointer">
                  {singleProduct.subcategory[0]?.name}
                </div>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {/* Current Page */}
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900 font-medium truncate max-w-xs">
                  {singleProduct.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
                <MyGallery images={singleProduct.images.map((img) => img)} />
              </div>
            </div>
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="bg-green-50 cursor-pointer text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 transition">
                    {singleProduct.category.name}
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                    {singleProduct.brand.name}
                  </span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {singleProduct.title}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-400 mr-2">
                    <div className="flex gap-1 text-yellow-400 mr-2">
                      {renderStars(singleProduct.ratingsAverage)}
                    </div>
                    <span className="text-xs text-gray-500">
                      {singleProduct.ratingsAverage} {`(${singleProduct.ratingsQuantity} reviews)`}
                    </span>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-3 mb-6">
                  {singleProduct.priceAfterDiscount ? (
                    <>
                      <span className="text-3xl font-bold text-gray-900">
                        {singleProduct.priceAfterDiscount} EGP
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {singleProduct.price} EGP
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">
                      {singleProduct.price} EGP
                    </span>
                  )}
                  {singleProduct.priceAfterDiscount && (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                      {`Save ${getDiscountPercentage(singleProduct.price, singleProduct.priceAfterDiscount)}%`}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full 
                    ${singleProduct.quantity > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full 
                    ${singleProduct.quantity > 0 ? 'bg-green-500' : 'bg-red-500'}`}
                    ></span>
                    {singleProduct.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-5 mb-6">
                  <div className="text-gray-600 leading-relaxed">{singleProduct.description}</div>
                </div>
                <Quantity
                  maxQty={singleProduct.quantity}
                  price={singleProduct.priceAfterDiscount ?? singleProduct.price}
                />
                <AddToCartButtons  id={singleProduct.id} />
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <FaTruckFast />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">30 Days Return</h4>
                        <p className="text-xs text-gray-500">Money back</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <FaArrowRotateLeft />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">30 Days Return</h4>
                        <p className="text-xs text-gray-500">Money back</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <FaShieldAlt />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">Secure Payment</h4>
                        <p className="text-xs text-gray-500">100% Protected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <TabsDemo id={id} />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                You May Also <span className="text-emerald-600">Like</span>
              </h2>
            </div>
          </div>
          <ProductSwiper products={relatedProducts} />
        </div>
      </section>
    </>
  );
}
