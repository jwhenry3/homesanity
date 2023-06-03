import { z } from "zod"

export const ItemIdPayload = z.object({
  token: z.string().nonempty(),
  itemId: z.string().nonempty(),
})

export const SaveItemPayload = z.object({
  token: z.string().nonempty(),
  itemId: z.string().optional(), // optional since we may be creating a new Item
  name: z.string().nonempty(),
  location: z.string().nonempty().optional(),
  photo: z.string().optional(), // could be a base64 encoded image for storage simplicity
  quantity: z.number().nonnegative(),
  notes: z.string().optional(),
  reminder: z
    .object({
      remindAt: z.number().nonnegative(),
      remindText: z.string().nonempty(),
      lastAcknowledged: z.number().nonnegative().optional(),
      recurrence: z.string().optional(),
    })
    .optional(),
})

export declare type ItemIdPayload = z.infer<typeof ItemIdPayload>
export declare type SaveItemPayload = z.infer<typeof SaveItemPayload>
