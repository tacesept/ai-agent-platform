import { db } from "@/db";
import { agents } from "@/db/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";

export const agentsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const data = await db.select().from(agents);
    // If data is null or undefined, throw a TRPCError

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    // throw new TRPCError({
    //   code: "NOT_FOUND",
    //   message: "No agents found.",
    // });

    return data;
  }),
});
