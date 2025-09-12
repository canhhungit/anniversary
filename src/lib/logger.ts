type LogArgs = Parameters<typeof console.log>;

export const logger = {
  info: (msg: string, ...args: LogArgs) =>
    console.log(`ℹ️ [INFO] ${msg}`, ...args),
  warn: (msg: string, ...args: LogArgs) =>
    console.warn(`⚠️ [WARN] ${msg}`, ...args),
  error: (msg: string, ...args: LogArgs) =>
    console.error(`❌ [ERROR] ${msg}`, ...args),
};
