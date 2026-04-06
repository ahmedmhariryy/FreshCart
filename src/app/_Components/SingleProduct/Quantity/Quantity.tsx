'use client';
import { QuantityProps } from '@/api/types/product.type';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';


export default function Quantity({ maxQty, price }: QuantityProps) {
  const [qty, setQty] = useState(1);
  const isOutOfStock = maxQty === 0;

  return (
    <>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
        <div className="flex items-center gap-4">
          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
            {/* decrease */}
            <button
              onClick={() => setQty((prev) => Math.max(1, prev - 1))}
              disabled={qty === 1 || isOutOfStock}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50 flex items-center justify-center cursor-pointer"
            >
              <FaMinus />
            </button>

            {/* input */}
            <input
              type="number"
              min={1}
              max={maxQty}
              value={qty}
              onChange={(e) => {
                let value = Number(e.target.value);
                if (value < 1) value = 1;
                if (value > maxQty) value = maxQty;
                setQty(value);
              }}
              className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
            />
            {/* increase */}
            <button
              onClick={() => setQty((prev) => Math.min(maxQty, prev + 1))}
              disabled={qty === maxQty || isOutOfStock}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50 flex items-center justify-center cursor-pointer"
            >
              <FaPlus />
            </button>
          </div>
          <span className="text-sm text-gray-500">{maxQty} available</span>
        </div>
      </div>
      {/* Total Price */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Price:</span>
          <span className="text-2xl font-bold text-green-600">{qty * price} EGP</span>
        </div>
      </div>
    </>
  );
}
