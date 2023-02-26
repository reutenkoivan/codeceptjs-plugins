import { event } from 'codeceptjs'

import type { BasePlugin } from '../basePlugin'
import { DispatcherEmit } from '../types'
import { createMissedId } from './createMissedId'

const { dispatcher, hook, step, test, suite, all } = event

export const testDataAggregator = <T extends BasePlugin> (store: T): T => {
  dispatcher.on(hook.started, () => {
    store.startedHook()
  })

  dispatcher.on(hook.passed, () => {
    store.passedHook()
  })

  dispatcher.on(step.before, (step: DispatcherEmit.step.before) => {
    store.beforeStep(createMissedId<DispatcherEmit.step.before>(step))
  })

  dispatcher.on(step.after, (step: DispatcherEmit.step.before) => {
    store.afterStep(createMissedId<DispatcherEmit.step.before>(step))
  })

  dispatcher.on(step.started, (step: DispatcherEmit.step.before) => {
    store.startedStep(createMissedId<DispatcherEmit.step.before>(step))
  })

  dispatcher.on(step.finished, (step: DispatcherEmit.step.after) => {
    store.finishedStep(createMissedId<DispatcherEmit.step.after>(step))
  })

  dispatcher.on(step.passed, (step: DispatcherEmit.step.passed) => {
    store.passedStep(createMissedId<DispatcherEmit.step.passed>(step))
  })

  dispatcher.on(step.failed, (step: DispatcherEmit.step.failed) => {
    store.failedStep(createMissedId<DispatcherEmit.step.failed>(step))
  })

  dispatcher.on(test.before, (test: DispatcherEmit.test.before) => {
    store.beforeTest(createMissedId<DispatcherEmit.test.before>(test))
  })

  dispatcher.on(test.started, (test: DispatcherEmit.test.before) => {
    store.startedTest(createMissedId<DispatcherEmit.test.before>(test))
  })

  dispatcher.on(test.passed, (test: DispatcherEmit.test.after) => {
    store.passedTest(createMissedId<DispatcherEmit.test.after>(test))
  })

  dispatcher.on(
    test.failed,
    (test: DispatcherEmit.test.before | DispatcherEmit.suite.before, error: DispatcherEmit.test.error) => {
      store.failedTest(createMissedId<DispatcherEmit.test.before | DispatcherEmit.suite.before>(test), error)
    }
  )

  dispatcher.on(test.skipped, (test: DispatcherEmit.test.after) => {
    store.skippedTest(createMissedId<DispatcherEmit.test.after>(test))
  })

  dispatcher.on(test.finished, (test: DispatcherEmit.test.after) => {
    store.finishedTest(createMissedId<DispatcherEmit.test.after>(test))
  })

  dispatcher.on(test.after, (test: DispatcherEmit.test.after) => {
    store.afterTest(createMissedId<DispatcherEmit.test.after>(test))
  })

  dispatcher.on(suite.before, (suite: DispatcherEmit.suite.before) => {
    store.beforeSuite(createMissedId<DispatcherEmit.suite.before>(suite))
  })

  dispatcher.on(suite.after, (suite: DispatcherEmit.suite.after) => {
    store.afterSuite(createMissedId<DispatcherEmit.suite.after>(suite))
  })

  dispatcher.on(all.before, () => {
    store.beforeAll()
  })

  dispatcher.on(all.after, () => {
    store.afterAll()
  })

  dispatcher.on(all.result, () => {
    store.resultAll()
  })

  return store
}
