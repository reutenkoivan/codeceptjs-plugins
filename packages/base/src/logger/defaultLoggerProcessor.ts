import { output } from 'codeceptjs'

class DefaultLoggerProcessor {
  info(msg: string, color?: string): void {
    output.say(msg, color)
  }

  debug(namespace: string, msg: string): void {
    output.plugin(namespace, msg)
  }

  error(msg: string): void {
    output.error(msg)
  }
}

export const defaultLoggerProcessor = new DefaultLoggerProcessor()
