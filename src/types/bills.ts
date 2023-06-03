import { z } from "zod"

export const BillIdPayload = z.object({
  token: z.string().nonempty(),
  billId: z.string().nonempty(),
})
export const SaveBillPayload = z.object({
  token: z.string().nonempty(),
  billId: z.string().optional(), // optional since we may be creating a new bill
  name: z.string().nonempty(),
  nextDueAmount: z.number().nonnegative(),
  nextDueDate: z.number().nonnegative(),
  recurrence: z.string().optional(),
})

export declare type BillIdPayload = z.infer<typeof BillIdPayload>
export declare type SaveBillPayload = z.infer<typeof SaveBillPayload>
