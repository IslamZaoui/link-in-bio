import { pinoLogger } from "hono-pino";
import { createLogger } from "@repo/logger";

export function logger(){
    return pinoLogger({
		pino: createLogger({ level: "debug", dev: true }),
	});
}
