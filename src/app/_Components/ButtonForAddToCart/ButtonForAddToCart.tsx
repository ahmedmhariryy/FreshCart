'use client';
import { AddToCart } from '@/actions/addToCart.action';
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import { FaCartShopping, FaPlus } from 'react-icons/fa6';
import { RiLoader2Fill } from 'react-icons/ri';
import { IoMdCheckmark } from 'react-icons/io';
import { CartContext } from '@/context/CartContext';
import { toast } from 'sonner';

const iconsMap = {
  cart: FaCartShopping,
  plus: FaPlus,
};

export default function ButtonForAddToCart({
  classes,
  word,
  wordStyle,
  iconStyle,
  icon,
  id,
}: {
  classes: string;
  word?: string;
  wordStyle?: string;
  iconStyle?: string;
  icon?: keyof typeof iconsMap;
  id: string;
}) {
  const { numOfCartItems, setnumOfCartItems } = useContext(CartContext);
  const Icon = icon ? iconsMap[icon] : null;
  const [updateLoading, setupdateLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function AddProduct() {
    setupdateLoading(true);

    try {
      const res = await AddToCart(id);

      if (res.status === 'success') {
        setnumOfCartItems((prev: number) => prev + 1);
      } else {
        setnumOfCartItems((prev: number) => Math.max(prev - 1, 0));
      }

      setSuccess(true);
      setupdateLoading(false);

      setTimeout(() => setSuccess(false), 1000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred');
      setupdateLoading(false);
    }
  }

  return (
    <Button onClick={AddProduct} className={classes}>
      {updateLoading ? (
        <>
          <RiLoader2Fill className="animate-spin" />
          {wordStyle && <span className={wordStyle}>Adding to Cart..</span>}
        </>
      ) : success ? (
        <div className="flex items-center gap-2">
          <IoMdCheckmark />
          {icon === 'cart' && <span>Added to Cart</span>}
        </div>
      ) : (
        <>
          {Icon && <Icon className={iconStyle} />}
          {word && <span className={wordStyle}>{word}</span>}
        </>
      )}
    </Button>
  );
}
