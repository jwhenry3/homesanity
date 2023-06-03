import { z } from "zod"
import { deleteOneItem } from "~/server/operations/items/deleteOne"
import { getAllItems } from "~/server/operations/items/getAll"
import { getOneItem } from "~/server/operations/items/getOne"
import { saveOneItem } from "~/server/operations/items/saveOne"

import { createTRPCRouter, publicProcedure } from "../utils"

export const itemsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
      })
    )
    .query(({ input }) => {
      // TODO: Pull Items from the DB
      return getAllItems()
    }),
  getOne: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
        itemId: z.string().nonempty(),
      })
    )
    .query(({ input }) => {
      // TODO: Lookup Item by id from the DB
      return getOneItem()
    }),
  saveOne: publicProcedure
    .input(
      z.object({
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
    )
    .mutation(({ input }) => {
      return saveOneItem()
    }),
  deleteOne: publicProcedure
    .input(
      z.object({
        token: z.string().nonempty(),
        itemId: z.string().nonempty(),
      })
    )
    .mutation(({ input }) => {
      return deleteOneItem()
    }),
})
