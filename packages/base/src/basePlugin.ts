import { Logger } from './utils/logger'
import { BaseEvents } from './types'

export abstract class BasePlugin {
  config: any
  logger: Logger

  constructor(config: Record<string, any>, namespace: string) {
    this.config = config
    this.logger = new Logger(namespace)
  }

  startedHook(): void {}

  passedHook(): void {}

  beforeStep(_step: BaseEvents.step.before): void {}

  afterStep(_step: BaseEvents.step.before): void {}

  startedStep(_step: BaseEvents.step.before): void {}

  finishedStep(_step: BaseEvents.step.after): void {}

  passedStep(_step: BaseEvents.step.passed): void {}

  failedStep(_step: BaseEvents.step.failed): void {}

  beforeTest(_test: BaseEvents.test.before): void {}

  afterTest(_test: BaseEvents.test.after): void {}

  startedTest(_test: BaseEvents.test.before): void {}

  finishedTest(_test: BaseEvents.test.after): void {}

  passedTest(_test: BaseEvents.test.after): void {}

  failedTest(_test: BaseEvents.test.before | BaseEvents.suite.before, _error: BaseEvents.test.error): void {}

  beforeSuite(_suite: BaseEvents.suite.before): void {}

  afterSuite(_suite: BaseEvents.suite.after): void {}

  resultAll(): void {}

  skippedTest(_test: BaseEvents.test.after): void {}

  beforeAll(): void {}

  afterAll(): void {}
}
