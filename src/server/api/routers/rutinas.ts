import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

import { rutina } from "@/server/db/schema";
import { eq, not, sql, and } from 'drizzle-orm';


export const rutinaRouter = createTRPCRouter({

  create: protectedProcedure
    .input(z.object({ 
        title: z.string().min(1),  
        descripcion: z.string().min(1), 
        type: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(rutina).values({
        title: input.title,
        ownerId: ctx.session.user.id,
        descripcion: input.descripcion,
        type: input.type,
        lastUsed: new Date(),

      });

      
      

    }),

    getLast4: protectedProcedure
      .input(z.object({
        type: z.string().min(1),
      }))
      .query(async ({ ctx, input }) => {
        if (!ctx || !input) {
          throw new Error("Invalid context or input");
        }

        console.log("id: ", ctx.session.user.id);
        console.log("type: ", input.type);

        return await ctx.db.select({
          id: rutina.id,
          title: rutina.title,
        }).from(rutina)
        .where(and(
          eq(rutina.ownerId, ctx.session.user.id),
          eq(rutina.type, input.type),
        )
        )
        .orderBy(rutina.lastUsed);
        //.limit(4);
      }),

      getRoutine: protectedProcedure
      .input(z.object({
        id: z.number(),
      }))
      .query(async ({ ctx, input }) => {
        if (!ctx || !input) {
          throw new Error("Invalid context or input");
        }
        return await ctx.db.select().from(rutina)
        .where(
          and(
            eq(rutina.id, input.id),
            eq(rutina.ownerId, ctx.session.user.id),
          )
        )
      }),




 

});