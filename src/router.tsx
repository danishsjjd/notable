import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { createRouter as createTanstackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import * as TanstackQuery from "./integrations/tanstack-query/root-provider";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const router = routerWithQueryClient(
    createTanstackRouter({
      routeTree,
      defaultPreload: "intent",
      context: {
        ...TanstackQuery.getContext(),
      },
      // Commented out below 2 as convex suggested
      // scrollRestoration: true,
      // defaultPreloadStaleTime: 0,
      Wrap: ({ children }) => (
        <ConvexAuthProvider
          client={TanstackQuery.getContext().convexQueryClient.convexClient}
        >
          {children}
        </ConvexAuthProvider>
      ),
    }),
    TanstackQuery.getContext().queryClient
  );

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
