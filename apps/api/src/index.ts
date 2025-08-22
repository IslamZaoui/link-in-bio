import { baseFactory } from "api/lib/factory";
import indexRoute from "api/routes/index.route";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { requestId } from "hono/request-id";

const app = baseFactory
	.createApp()
	.basePath("/api")
	.use(cors())
	.use(requestId())
	.use(logger())
	.route("/", indexRoute);

export default app;
