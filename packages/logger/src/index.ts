import type { PrettyOptions } from "pino-pretty";

import pino, { type LevelWithSilent } from "pino";
import pinoPretty from "pino-pretty";

export interface LoggerOptions {
	level: LevelWithSilent;
	dev: boolean;
}

const prettyOptions: PrettyOptions = {
	colorize: true,
	translateTime: "yyyy-mm-dd HH:MM:ss",
	ignore: "pid,hostname",
};

export function createLogger(opt: LoggerOptions): pino.Logger {
	return pino(
		{
			level: opt.level,
		},
		opt.dev ? pinoPretty(prettyOptions) : undefined
	);
}
