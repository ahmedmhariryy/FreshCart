import { authOptions } from '@/app/next-auth/authOptions';
import { getServerSession } from 'next-auth/next';
import { OrdersArray } from '../types/allorders.type';

export async function getAllOrders(): Promise<OrdersArray> {
  const session = await getServerSession(authOptions);
  const userId = session?.id;
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`);
  const data = await res.json();
  return data;
}
