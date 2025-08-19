import { baseFactory } from "api/lib/factory";

const indexRoute = baseFactory.createApp().get("/", (c) => c.text("Hello World"));

export default indexRoute;
