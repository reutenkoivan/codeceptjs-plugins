/* eslint-disable no-console */

import chalk from 'chalk'
import { output } from 'codeceptjs'

export class Logger {
  namespace: string

  constructor(namespace: string) {
    this.namespace = namespace
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
      output.plugin(this.namespace, row)
    }
  }

  say(msg: string, data?: any): void {
    for (const row of this.format(msg, data)) {
      output.say(`[ ${this.namespace} ] ${row}`, 'magenta')
    }
  }

  error(error: string | Error): void {
    if (typeof error === 'string') {
      for (const row of this.format(error)) {
        output.error(`[ ${this.namespace} ] ${row}`)
      }

      return
    }

    if (error.stack) {
      for (const row of this.format(error.stack)) {
        output.error(`[ ${this.namespace} ] ${row}`)
      }

      return
    }

    for (const row of this.format(error.message)) {
      output.error(`[ ${this.namespace} ] ${row}`)
    }
  }

  exitEarly(error: string | Error, exitCode: number = 1): void {
    this.error(error)

    process.exit(exitCode)
  }
}
