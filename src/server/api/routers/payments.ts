import { z } from "zod"
import { deleteOnePayment } from "~/server/operations/payments/deleteOne"
import { getAllPayments } from "~/server/operations/payments/getAll"
import { saveOnePayment } from "~/server/operations/payments/saveOne"

import { createTRPCRouter, publicProcedure } from "../utils"

export const paymentsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
        billId: z.string().nonempty(),
      })
    )
    .query(({ input }) => {
      // TODO: Pull bills from the DB
      return getAllPayments()
    }),
  saveOne: publicProcedure
    .input(
      z.object({
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
    )
    .mutation(({ input }) => {
      return saveOnePayment()
    }),
  deleteOne: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
        billId: z.string().nonempty(),
        paymentId: z.string().nonempty(),
      })
    )
    .mutation(({ input }) => {
      return deleteOnePayment()
    }),
})
