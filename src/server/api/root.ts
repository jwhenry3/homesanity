import { billsRouter } from "./routers/bills"
import { exampleRouter } from "./routers/example"
import { itemsRouter } from "./routers/items"
import { paymentsRouter } from "./routers/payments"
import { createTRPCRouter } from "./utils"

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  bills: billsRouter,
  payments: paymentsRouter,
  items: itemsRouter,
})

export type AppRouter = typeof appRouter
