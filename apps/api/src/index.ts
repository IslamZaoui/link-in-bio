import { baseFactory } from "api/lib/factory";
import indexRoute from "api/routes/index.route";

const app = baseFactory.createApp().basePath("/api").route("/", indexRoute);

export default app;
