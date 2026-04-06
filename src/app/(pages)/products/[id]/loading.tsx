import React from 'react';
export default function loading() {
  return (
    <>
      <section className="py-6 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Gallery */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg mb-3"></div>
                <div className="flex gap-2">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                {/* Category + Brand */}
                <div className="flex gap-2 mb-4">
                  <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
                </div>

                {/* Title */}
                <div className="w-2/3 h-8 bg-gray-200 rounded mb-3"></div>

                {/* Rating */}
                <div className="w-40 h-4 bg-gray-200 rounded mb-4"></div>

                {/* Price */}
                <div className="flex gap-3 mb-6">
                  <div className="w-24 h-8 bg-gray-200 rounded"></div>
                  <div className="w-16 h-6 bg-gray-200 rounded"></div>
                </div>

                {/* Stock */}
                <div className="w-28 h-6 bg-gray-200 rounded-full mb-6"></div>

                {/* Description */}
                <div className="space-y-2 mb-6">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
                  <div className="w-4/6 h-4 bg-gray-200 rounded"></div>
                </div>

                {/* Quantity */}
                <div className="w-40 h-10 bg-gray-200 rounded mb-4"></div>

                {/* Buttons */}
                <div className="flex gap-3 mb-6">
                  <div className="w-32 h-10 bg-gray-200 rounded"></div>
                  <div className="w-32 h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="w-24 h-3 bg-gray-200 rounded"></div>
                      <div className="w-16 h-3 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="w-24 h-3 bg-gray-200 rounded"></div>
                      <div className="w-16 h-3 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="w-24 h-3 bg-gray-200 rounded"></div>
                      <div className="w-16 h-3 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tabs Skeleton */}
      <section className="py-8 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div className="flex gap-4">
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
              <div className="w-4/6 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
