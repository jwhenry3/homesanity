import { z } from "zod"
import { deleteOneBill } from "~/server/operations/bills/deleteOne"
import { getAllBills } from "~/server/operations/bills/getAll"
import { getOneBill } from "~/server/operations/bills/getOne"
import { saveOneBill } from "~/server/operations/bills/saveOne"

import { createTRPCRouter, publicProcedure } from "../utils"

export const billsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
        month: z.number().optional(),
      })
    )
    .query(({ input }) => {
      // TODO: Pull bills from the DB
      return getAllBills()
    }),
  getOne: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
        billId: z.string().nonempty(),
      })
    )
    .query(({ input }) => {
      // TODO: Lookup bill by id from the DB
      return getOneBill()
    }),
  saveOne: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
        billId: z.string().optional(), // optional since we may be creating a new bill
        name: z.string().nonempty(),
        nextDueAmount: z.number().nonnegative(),
        nextDueDate: z.number().nonnegative(),
        recurrence: z.string().optional(),
      })
    )
    .mutation(({ input }) => {
      return saveOneBill()
    }),
  deleteOne: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
        billId: z.string().nonempty(),
      })
    )
    .mutation(({ input }) => {
      return deleteOneBill()
    }),
})
