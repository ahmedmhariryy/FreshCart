'use client';
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import { FaCartShopping, FaPlus } from 'react-icons/fa6';
import { RiLoader2Fill } from 'react-icons/ri';
import { IoMdCheckmark } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { AddToWishlist } from '@/actions/addToWishlist.action';
import { WishlistContext } from '@/context/WishListContext';
import { toast } from 'sonner';
const iconsMap = {
  FaRegHeart: FaRegHeart,
  FaHeart: FaHeart,
};
export default function ButtonForAddToWishlist({
  classes,
  word,
  wordStyle,
  iconStyle,
  icon,
  id,
  onSuccess,
}: {
  classes: string;
  word?: string;
  wordStyle?: string;
  iconStyle?: string;
  icon?: keyof typeof iconsMap;
  id: string;
  onSuccess?: () => void;
}) {
  const { numOfWishlistItems, setnumOfWishlistItems } = useContext(WishlistContext);
  const Icon = icon ? iconsMap[icon] : null;
  const [updateLoading, setupdateLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  async function AddProduct() {
    setupdateLoading(true);
    try {
      const res = await AddToWishlist(id);
      if (res.status === 'success') {
        setSuccess(true);
        setnumOfWishlistItems(numOfWishlistItems + 1);
        onSuccess?.();
      } else {
        console.log('FAILED RESPONSE');
      }
    } catch (error) {
      console.error('ERROR:', error);
      toast.error(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setupdateLoading(false);
    }
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  }

  return (
    <>
      <Button
        onClick={() => {
          AddProduct();
        }}
        className={classes}
      >
        {updateLoading ? (
          <>
            <RiLoader2Fill className="animate-spin" />
            {word && <span className={wordStyle}>{word}</span>}
          </>
        ) : success ? (
          <div className="flex items-center gap-2">
            <IoMdCheckmark />
          </div>
        ) : (
          <>
            {Icon && <Icon className={iconStyle} />}
            {word && <span className={wordStyle}>{word}</span>}
          </>
        )}
      </Button>
    </>
  );
}
