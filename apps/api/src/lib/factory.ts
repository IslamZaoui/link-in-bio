import type { baseEnv } from "api/types";
import { createFactory } from "hono/factory";

export const baseFactory = createFactory<baseEnv>();
