import * as zod from 'zod';

export const cheackoutSchema = zod.object({
  city: zod
    .string()
    .trim()
    .nonempty('*City name must be at least 2 characters')
    .min(2, '*City name must be at least 2 characters')
    .max(50, '*City name must be less than 50 characters'),
  details: zod
    .string()
    .trim()
    .nonempty('*Address details must be at least 10 characters')
    .min(10, '*Address details must be at least 10 characters')
    .max(200, '*Address details must be less than 200 characters'),
  phone: zod
    .string()
    .nonempty('*Please enter a valid Egyptian phone number')
    .regex(/^(?:\+20|0)1[0125][0-9]{8}$/, '*Only Egyptian phone numbers are allowed'),
});
export type cheackoutSchemaType = zod.infer<typeof cheackoutSchema>;
