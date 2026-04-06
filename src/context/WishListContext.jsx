'use client';
import { getLoggedUserWishlist } from '@/actions/addToWishlist.action';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const WishlistContext = createContext();
export default function WishlistContextProvider({ children }) {
  const [numOfWishlistItems, setnumOfWishlistItems] = useState(0);
  async function getProductWishlist() {
    try {
      const res = await getLoggedUserWishlist();
      let sum = 0;
      res.data.products.forEach((product) => {
        sum += product.count;
      });
      setnumOfWishlistItems(sum);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProductWishlist();
  }, []);
  return (
    <WishlistContext.Provider value={{ numOfWishlistItems, setnumOfWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
}
