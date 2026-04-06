import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export async function getAccessToken() {
  const cookieStore = await cookies();

  const tokenDev = cookieStore.get('next-auth.session-token')?.value;
  const tokenProd = cookieStore.get('__Secure-next-auth.session-token')?.value;

  const myToken = tokenDev || tokenProd;

  // ✅ حماية من الكراش
  if (!myToken) {
    console.log('❌ No session token found');
    return null;
  }
  try {
    const decodedToken = await decode({
      token: myToken,
      secret: process.env.NEXTAUTH_SECRET!,
    });
    return decodedToken?.routeToken || null;
  } catch (err) {
    console.error('❌ Decode failed:', err);
    return null;
  }
}
