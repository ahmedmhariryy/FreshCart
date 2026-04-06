// types/order.ts
export type OrdersArray = Order[];
export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface Order {
  _id: string;
  id: number;
  shippingAddress: ShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  cartItems: CartItem[];
  __v: number;
}