import { z } from "zod"
import { deleteOnePayment } from "~/server/operations/payments/deleteOne"
import { getAllPayments } from "~/server/operations/payments/getAll"
import { saveOnePayment } from "~/server/operations/payments/saveOne"
import { BillIdPayload } from "~/server/types/bills"
import { PaymentIdPayload, SavePaymentPayload } from "~/server/types/payments"

import { createTRPCRouter, publicProcedure } from "../utils"

export const paymentsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(BillIdPayload)
    .query(({ input }) => getAllPayments()),
  saveOne: publicProcedure
    .input(SavePaymentPayload)
    .mutation(({ input }) => saveOnePayment()),
  deleteOne: publicProcedure
    .input(PaymentIdPayload)
    .mutation(({ input }) => deleteOnePayment()),
})
