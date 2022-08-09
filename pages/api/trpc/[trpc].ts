import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import data from "../../../data.json";

export const appRouter = trpc
  .router()
  .query("movies.getMovies", {
    input: z.object({
      option: z.string(),
    }),
    resolve({ input }) {
      if (input?.option === "all") {
        return {
          option: input?.option,
          results: data.movies,
        };
      }

      if (input?.option === "#") {
        const filteredMovies = data.movies.filter((movie) => {
          return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
            movie.title[0].toLowerCase()
          );
        });
        return {
          option: input?.option,
          results: filteredMovies,
        };
      }

      const filteredMovies = data.movies.filter((movie) => {
        return movie.title[0].toLowerCase() === input?.option.toLowerCase();
      });
      return {
        option: input?.option,
        results: filteredMovies,
      };
    },
  })
  .query("movies.getRandomMovie", {
    resolve() {
      const randomIndex = Math.floor(Math.random() * data.movies.length);
      return {
        result: data.movies[randomIndex],
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
