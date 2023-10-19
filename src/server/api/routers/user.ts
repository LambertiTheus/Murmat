import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc"

export const userRouter = createTRPCRouter({
  userInfo: protectedProcedure
    .query(({ ctx }) => {
      const email = ctx.user?.emailAddresses[0]?.emailAddress
      const name = ctx.user?.firstName

      return { email, name }
    }),
});
