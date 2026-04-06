// ToggleBtnsInWishlist.tsx
'use client';
import React, { useState, useEffect, useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import ButtonForAddToWishlist from '../ButtonForAddToWishlist/ButtonForAddToWishlist';
import { getLoggedUserWishlist, RemoveFromWishlist } from '@/actions/addToWishlist.action';
import { WishlistContext } from '@/context/WishListContext';

export default function ToggleBtnsInWishlist({
  classesOne,
  classesTwo,
  word,
  wordTwo,
  id,
}: {
  classesOne?: string;
  classesTwo?: string;
  word?: string;
  wordTwo?: string;
  id: string;
}) {
  const { numOfWishlistItems, setnumOfWishlistItems } = useContext(WishlistContext);
  const [inWishlist, setInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await getLoggedUserWishlist();
        if (res.status === 'success') {
          setInWishlist(res.data.some((item: { id: string }) => item.id === id));
        }
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
      }
    }
    fetchWishlist();
  }, [id]);

  const handleRemoveFromWishlist = async () => {
    setLoading(true);
    try {
      const res = await RemoveFromWishlist(id);
      if (res.status === 'success') {
        setInWishlist(false);
        setnumOfWishlistItems((prev: number) => Math.max(prev - 1, 0));
      }
    } catch (error) {
      console.error('Failed to remove from wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {inWishlist ? (
        <button onClick={handleRemoveFromWishlist} disabled={loading} className={classesTwo}>
          <FaHeart />
          {wordTwo && <span>{wordTwo}</span>}
        </button>
      ) : (
        <ButtonForAddToWishlist
          classes={classesOne || ''}
          word={word || ''}
          icon="FaRegHeart"
          id={id}
          onSuccess={() => setInWishlist(true)}
        />
      )}
    </>
  );
}
