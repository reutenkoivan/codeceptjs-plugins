/* eslint-disable no-console */

import chalk from 'chalk'
import { LoggerOptions, LoggerProcessorContract } from './types'
import { defaultLoggerProcessor } from './defaultLoggerProcessor'

export class Logger {
  protected readonly namespace: string
  protected readonly loggerProcessor: LoggerProcessorContract

  constructor({ namespace, loggerProcessor }: LoggerOptions) {
    this.namespace = namespace
    this.loggerProcessor = loggerProcessor || defaultLoggerProcessor
  }

  static version(namespace: string, version: string): void {
    const msg = chalk.yellow(`[ ${namespace}-plugin ] => v.${version}`)

    console.log(msg)
  }

  static info(namespace: string, str: string): void {
    const msg = chalk.blackBright(`[ ${namespace}-plugin ] => ${str}`)

    console.log(msg)
  }

  private format(msg: string, data?: any): string[] {
    let resultMsg = msg

    if (data) {
      if (typeof data === 'object') {
        resultMsg += `\n${JSON.stringify(data, null, 2)}`
      } else {
        resultMsg += ` ${data}`
      }
    }

    return resultMsg.split('\n')
  }

  debug(msg: string, data?: any): void {
    for (const row of this.format(msg, data)) {
      this.loggerProcessor.debug(this.namespace, row)
    }
  }

  say(msg: string, data?: any): void {
    for (const row of this.format(msg, data)) {
      this.loggerProcessor.info(`[ ${this.namespace} ] ${row}`, 'magenta')
    }
  }

  error(error: string | Error): void {
    if (typeof error === 'string') {
      for (const row of this.format(error)) {
        this.loggerProcessor.error(`[ ${this.namespace} ] ${row}`)
      }

      return
    }

    if (error.stack) {
      for (const row of this.format(error.stack)) {
        this.loggerProcessor.error(`[ ${this.namespace} ] ${row}`)
      }

      return
    }

    for (const row of this.format(error.message)) {
      this.loggerProcessor.error(`[ ${this.namespace} ] ${row}`)
    }
  }
}
