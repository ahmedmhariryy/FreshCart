'use server';
import { getAccessToken } from '@/utilities';
export async function AddToWishlist(productId: string) {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Hey 👋, please login to start add items to your cart');
  }
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'POST',
    headers: { token: token as string, 'content-type': 'application/json' },
    body: JSON.stringify({ productId: productId }),
  });
  const data = await res.json();
  return data;
}
export async function getLoggedUserWishlist() {
  const token = await getAccessToken();
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'GET',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
export async function RemoveFromWishlist(productId: string) {
  const token = await getAccessToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
    method: 'DELETE',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
