export interface AddressData {
  ok: boolean;
  data: Details[] | null;
  error: string | null;
}

export interface Details {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}