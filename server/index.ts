import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(() => {
    return "Hi there";
  }),
});

export type AppRouter = typeof appRouter;