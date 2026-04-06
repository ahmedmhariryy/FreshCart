'use server';
import { UpdatePersonalDetailsSchemaType } from '@/schemas/auth.schema';
import { getAccessToken } from '@/utilities';

export async function updateUserDetails(data: UpdatePersonalDetailsSchemaType) {
  const token = await getAccessToken();
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/users/updateMe/', {
      method: 'PUT',
      headers: { token: token as string, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
      }),
    });
    const result = await res.json();
    return {
      ok: res.ok,
      data: result,
      error: result?.message || null,
    };
  } catch (err) {
    return {
      ok: false,
      error: 'Something went wrong',
    };
  }
}
