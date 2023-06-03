import { z } from "zod"
import { deleteOneBill } from "~/server/operations/bills/deleteOne"
import { getAllBills } from "~/server/operations/bills/getAll"
import { getOneBill } from "~/server/operations/bills/getOne"
import { saveOneBill } from "~/server/operations/bills/saveOne"
import { BillIdPayload, SaveBillPayload } from "~/server/types/bills"
import { TokenPayload } from "~/server/types/general"

import { createTRPCRouter, publicProcedure } from "../utils"

export const billsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(TokenPayload)
    .query(({ input }) => getAllBills()),
  getOne: publicProcedure
    .input(BillIdPayload)
    .query(({ input }) => getOneBill()),
  saveOne: publicProcedure
    .input(SaveBillPayload)
    .mutation(({ input }) => saveOneBill()),
  deleteOne: publicProcedure
    .input(BillIdPayload)
    .mutation(({ input }) => deleteOneBill()),
})
