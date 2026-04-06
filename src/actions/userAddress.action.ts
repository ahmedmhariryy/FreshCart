'use server';
import { AddAddressSchemaType } from '@/schemas/auth.schema';
import { getAccessToken } from '@/utilities';
export async function addAddresses(data: AddAddressSchemaType) {
  const token = await getAccessToken();
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/addresses', {
      method: 'POST',
      headers: {
        token: token as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return {
      ok: res.ok,
      data: res.ok ? result.data || null : null,
      error: res.ok ? null : result?.message || 'Failed to add address',
    };
  } catch (err) {
    return {
      ok: false,
      data: null,
      error: 'Something went wrong',
    };
  }
}

export async function getAddresses() {
  const token = await getAccessToken();
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/addresses', {
      method: 'GET',
      headers: { token: token as string },
    });
    const result = await res.json();
    return {
      ok: res.ok,
      data: res.ok ? result.data || [] : null, 
      error: res.ok ? null : result?.message || 'Failed to fetch addresses',
    };
  } catch (err) {
    return {
      ok: false,
      data: null,
      error: 'Something went wrong',
    };
  }
}
export async function RemoveAddress(productId: string) {
  const token = await getAccessToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${productId}`, {
    method: 'DELETE',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
export async function UpdateSpecificAddress(productId: string) {
  const token = await getAccessToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${productId}`, {
    method: 'GET',
    headers: { token: token as string, 'content-type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
