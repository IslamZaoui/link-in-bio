import type { baseEnv } from "api/types";
import { createFactory } from "hono/factory";
import { logger } from "api/middlewares/logger";
import { requestId } from "hono/request-id";

export const baseFactory = createFactory<baseEnv>({
	initApp(app) {
		return app.use(requestId()).use(logger());
	},
});
