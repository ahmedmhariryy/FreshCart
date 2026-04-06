'use server';
import {
  forgotPasswordSchemaType,
  OtpSchemaType,
  RegisterSchemaType,
  ResetPasswordSchemaType,
  UpdatePasswordSchemaType,
} from '@/schemas/auth.schema';
import { getAccessToken } from '@/utilities';
// userRegister
export async function userRegister(data: RegisterSchemaType) {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await res.json();
    return res.ok;
  } catch {}
}
// forgotPasswords
export async function forgotPasswords(data: forgotPasswordSchemaType) {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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
// resetPassword
export async function resetPassword(data: ResetPasswordSchemaType) {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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
// verifyResetCode
export async function verifyResetCode(data: OtpSchemaType) {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resetCode: data.otp }),
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
// changeMyPassword
export async function changeMyPassword(data: UpdatePasswordSchemaType) {
    const token = await getAccessToken();
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', {
      method: 'PUT',
      headers: {  token: token as string, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentPassword:data.password,
        password: data.newPassword,
        rePassword:  data.rePassword,
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
