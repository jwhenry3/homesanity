import { z } from "zod"

export const TokenPayload = z.object({
  token: z.string().nonempty(),
})
export declare type TokenPayload = z.infer<typeof TokenPayload>
