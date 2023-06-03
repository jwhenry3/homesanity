import { z } from "zod"
import { deleteOneItem } from "~/server/operations/items/deleteOne"
import { getAllItems } from "~/server/operations/items/getAll"
import { getOneItem } from "~/server/operations/items/getOne"
import { saveOneItem } from "~/server/operations/items/saveOne"
import { TokenPayload } from "~/server/types/general"
import { ItemIdPayload, SaveItemPayload } from "~/server/types/items"

import { createTRPCRouter, publicProcedure } from "../utils"

export const itemsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(TokenPayload)
    .query(({ input }) => getAllItems()),
  getOne: publicProcedure
    .input(ItemIdPayload)
    .query(({ input }) => getOneItem()),
  saveOne: publicProcedure
    .input(SaveItemPayload)
    .mutation(({ input }) => saveOneItem(input)),
  deleteOne: publicProcedure
    .input(ItemIdPayload)
    .mutation(({ input }) => deleteOneItem()),
})
