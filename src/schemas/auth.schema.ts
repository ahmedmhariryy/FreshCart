import * as zod from 'zod';
// RegisterSchema
export const RegisterSchema = zod
  .object({
    name: zod
      .string()
      .trim()
      .nonempty('*Please enter your name')
      .min(3, '*Name is too short')
      .max(25, '*Name is too long'),

    email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),

    phone: zod
      .string()
      .nonempty('*Please enter your phone number')
      .regex(/^(?:\+20|0)1[0125][0-9]{8}$/, '*Only Egyptian phone numbers are allowed'),

    password: zod
      .string()
      .nonempty('*Please enter your password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),

    rePassword: zod.string().nonempty('*Please confirm your password'),

    terms: zod.boolean().refine((val) => val === true, '*You must accept the terms and conditions'),
  })
  .refine((object) => object.password === object.rePassword, {
    message: 'password & rePassword not matched !',
    path: ['rePassword'],
  });
// UpdatePasswordSchema
export const UpdatePasswordSchema = zod
  .object({
    password: zod
      .string()
      .nonempty('*Please enter your password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    newPassword: zod
      .string()
      .nonempty('*Please enter your new password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    rePassword: zod.string().nonempty('*Please confirm your password'),
  })
  .refine((object) => object.newPassword === object.rePassword, {
    message: 'New Password & rePassword not matched !',
    path: ['rePassword'],
  });
// UpdatePersonalDetailsSchema
export const UpdatePersonalDetailsSchema = zod.object({
  name: zod
    .string()
    .trim()
    .nonempty('*Please enter your name')
    .min(3, '*Name is too short')
    .max(25, '*Name is too long'),
  email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),
  phone: zod
    .string()
    .nonempty('*Please enter your phone number')
    .regex(/^(?:\+20|0)1[0125][0-9]{8}$/, '*Only Egyptian phone numbers are allowed'),
});
// Add address
export const AddAddressSchema = zod.object({
  name: zod.string().max(20),
  details: zod.string().max(40),
  phone: zod.string().max(11),
  city: zod.string().max(20),
});
// NewPasswordSchema
export const NewPasswordSchema = zod
  .object({
    newPassword: zod
      .string()
      .nonempty('*Please enter your new password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    rePassword: zod.string().nonempty('*Please confirm your password'),
  })
  .refine((object) => object.newPassword === object.rePassword, {
    message: 'New Password & rePassword not matched !',
    path: ['rePassword'],
  });
// LoginSchema
export const LoginSchema = zod.object({
  email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),
  password: zod
    .string()
    .nonempty('*Please enter your password')
    .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
    .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
    .refine((val) => /\d/.test(val), '*Password must contain at least one number')
    .refine(
      (val) => /[^\w\d\s:]/.test(val),
      '*Password must contain at least one special character',
    )
    .min(8, '*Password must be at least 8 characters long')
    .max(16, '*Password must not exceed 16 characters'),
});
// forgotPasswordSchema
export const forgotPasswordSchema = zod.object({
  email: zod.string().nonempty('*Please enter your email').email('Email is required'),
});
// otpSchema
export const otpSchema = zod.object({
  otp: zod
    .string()
    .length(6, '*OTP must be exactly 6 digits')
    .regex(/^\d+$/, '*OTP must contain only numbers'),
});
// ResetPasswordSchema
export const ResetPasswordSchema = zod
  .object({
    email: zod.string().nonempty('*Please enter your email').email('*Invalid email address'),
    newPassword: zod
      .string()
      .nonempty('*Please enter your new password')
      .refine((val) => /[A-Z]/.test(val), '*Password must contain at least one uppercase letter')
      .refine((val) => /[a-z]/.test(val), '*Password must contain at least one lowercase letter')
      .refine((val) => /\d/.test(val), '*Password must contain at least one number')
      .refine(
        (val) => /[^\w\d\s:]/.test(val),
        '*Password must contain at least one special character',
      )
      .min(8, '*Password must be at least 8 characters long')
      .max(16, '*Password must not exceed 16 characters'),
    rePassword: zod.string().nonempty('*Please confirm your password'),
  })
  .refine((object) => object.newPassword === object.rePassword, {
    message: 'New Password & rePassword not matched !',
    path: ['rePassword'],
  });
// Types
export type OtpSchemaType = zod.infer<typeof otpSchema>;
export type RegisterSchemaType = zod.infer<typeof RegisterSchema>;
export type UpdatePasswordSchemaType = zod.infer<typeof UpdatePasswordSchema>;
export type UpdatePersonalDetailsSchemaType = zod.infer<typeof UpdatePersonalDetailsSchema>;
export type LoginSchemaType = zod.infer<typeof LoginSchema>;
export type forgotPasswordSchemaType = zod.infer<typeof forgotPasswordSchema>;
export type NewPasswordSchemaType = zod.infer<typeof NewPasswordSchema>;
export type ResetPasswordSchemaType = zod.infer<typeof ResetPasswordSchema>;
export type AddAddressSchemaType = zod.infer<typeof AddAddressSchema>;
