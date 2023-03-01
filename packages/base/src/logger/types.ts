export interface LoggerProcessorContract {
  debug: (namespace: string, msg: string) => void;
  info: (msg: string, color?: string) => void;
  error: (msg: string) => void;
}

export interface LoggerOptions {
  loggerProcessor?: LoggerProcessorContract;
  namespace: string;
}
