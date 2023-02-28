export interface LoggerProcessor {
  plugin: (namespace: string, msg: string) => void;
  say: (msg: string, color: string) => void;
  error: (msg: string) => void;
}

export interface LoggerOptions {
  loggerProcessor?: LoggerProcessor;
  namespace: string;
}
