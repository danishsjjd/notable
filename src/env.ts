import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    CONVEX_DEPLOYMENT: z.string(),
  },
  clientPrefix: "VITE_",
  client: {
    VITE_CONVEX_URL: z.string().url(),
  },
  runtimeEnvStrict: {
    VITE_CONVEX_URL: import.meta.env.VITE_CONVEX_URL,
    CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
  },
  emptyStringAsUndefined: true,
});
