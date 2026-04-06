'use server';

import { getAccessToken } from '@/utilities';

export async function AddToCart(productId: string) {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Hey 👋, please login to start add items to your cart');
  }
  const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
    method: 'POST',
    headers: { token: token as string, 'content-type': 'application/json' },
    body: JSON.stringify({ productId: productId }),
  });
  const data = await res.json();
  return data;
}
export async function getLoggedUserCart() {
  const token = await getAccessToken();
  const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
    method: 'GET',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
export async function UpdateProductQuantity(productId: string, count: number) {
  const token = await getAccessToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
    method: 'PUT',
    headers: { token: token as string, 'content-type': 'application/json' },
    body: JSON.stringify({ count: count }),
  });
  const data = await res.json();
  return data;
}
export async function RemoveProduct(productId: string) {
  const token = await getAccessToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
    method: 'DELETE',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
export async function RemoveAllProductsFromCart() {
  const token = await getAccessToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: 'DELETE',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
