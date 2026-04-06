import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaTruckFast } from 'react-icons/fa6';
import { FaBoxArchive } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { getSingleProduct } from '@/api/services/routemisr.service';
import { FaCheck } from 'react-icons/fa6';
import { calculateRatingPercentages, renderStars } from '../StarsRat/StarsRate';
import { FaTruck } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';

export async function TabsDemo({ id }: { id: string }) {
  const singleProduct = await getSingleProduct(id);
  const percentages = calculateRatingPercentages(singleProduct.reviews);
  return (
    <Tabs defaultValue="Product-Details">
      <TabsList >
        <TabsTrigger value="Product-Details" >
          <FaBoxArchive />
          Product Details
        </TabsTrigger>
        <TabsTrigger value="Reviews" >
          <FaStar />
          {`Reviews (${singleProduct.reviews.length})`}
        </TabsTrigger>
        <TabsTrigger value="Shipping-Returns" >
          <FaTruckFast />
          Shipping & Returns
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Product-Details">
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About this Product</h3>
              <p className="text-gray-600 leading-relaxed text-[16px] font-medium">
                {singleProduct.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Product Information</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-500">Category</span>
                    <span className="text-gray-900 font-medium">{singleProduct.category.name}</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-500">Subcategory</span>
                    <span className="text-gray-900 font-medium">
                      {singleProduct.subcategory[0].name}
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-500">Brand</span>
                    <span className="text-gray-900 font-medium">{singleProduct.brand.name}</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-500">Items Sold</span>
                    <span className="text-gray-900 font-medium">{singleProduct.sold}+ sold</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-600 mr-2 w-4" />
                    Premium Quality Product
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-600 mr-2 w-4" />
                    100% Authentic Guarantee
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-600 mr-2 w-4" />
                    Fast & Secure Packaging
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-600 mr-2 w-4" />
                    Quality Tested
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="Reviews">
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {singleProduct.ratingsAverage}
                </div>
                <div className="text-yellow-400">
                  <div className="flex justify-center text-lg gap-1 mr-2">
                    {renderStars(singleProduct.ratingsAverage)}
                  </div>
                </div>
                <p className="text-sm  text-gray-500 mt-2 font-medium">
                  {`Based on ${singleProduct.reviews.length} reviews`}
                </p>
              </div>
              <div className="flex-1 w-full">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-600 w-8">{star} star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                        style={{ width: `${percentages[star - 1]}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 w-10">
                      {percentages[star - 1].toFixed(0)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <div className="py-8 flex flex-col items-center">
                <FaStar className="text-4xl text-gray-300 mb-3" />
                <p className="text-gray-500">Customer reviews will be displayed here.</p>
                <button className="mt-4 text-green-600 hover:text-green-700 font-medium cursor-pointer">
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="Shipping-Returns">
        <div className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <FaTruck className="text-xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Shipping Information</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-600 mt-0.5" />
                    <span>Free shipping on orders over $50</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-600 mt-0.5" />
                    <span>Standard delivery: 3-5 business days</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-600 mt-0.5" />
                    <span>Express delivery available (1-2 business days)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-600 mt-0.5" />
                    <span>Track your order in real-time</span>
                  </li>
                </ul>
              </div>
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <FaArrowRotateLeft className="text-xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Returns & Refunds</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-600 mt-0.5" />
                    <span>30-day hassle-free returns</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-600 mt-0.5" />
                    <span>Full refund or exchange available</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-600 mt-0.5" />
                    <span>Free return shipping on defective items</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-600 mt-0.5" />
                    <span>Easy online return process</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
              <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                <FaShieldAlt className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Buyer Protection Guarantee</h4>
                <p className="text-sm text-gray-600">
                  Get a full refund if your order doesn&apos;t arrive or isn&apos;t as described. We
                  ensure your shopping experience is safe and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
