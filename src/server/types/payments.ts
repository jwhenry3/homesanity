import { z } from "zod"

export const PaymentIdPayload = z.object({
  token: z.string().nonempty(),
  billId: z.string().nonempty(),
  paymentId: z.string().nonempty(),
})

export const SavePaymentPayload = z.object({
  token: z.string().nonempty(),
  billId: z.string().nonempty(),
  paymentId: z.string().optional(), // could be creating or updating a payment
  amount: z.number().nonnegative(),
  date: z.number().nonnegative(),
  description: z.string(),
  nextDueAmount: z.number().nonnegative().optional(),
  nextDueDate: z.number().nonnegative().optional(),
  forcePaidOff: z.boolean().optional(),
})

export declare type PaymentIdPayload = z.infer<typeof PaymentIdPayload>
export declare type SavePaymentPayload = z.infer<typeof SavePaymentPayload>
