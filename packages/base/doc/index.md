---
sidebar_position: 1
slug: /
title: "@codeceptjs-plugins/base"
sidebar_label: Details
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::info TL;DR
Provides a plugin entity as class instead of a function, which is more convenient to use.
It also provides a plugin register which automatically subscribes to CodeceptJS events and calls plugin methods.
:::

## Installation
<Tabs groupId="package-manager">
<TabItem value="npm">

```shell
npm add -D @codeceptjs-plugins/base
```

</TabItem>
<TabItem value="yarn">

```shell
yarn add -D @codeceptjs-plugins/base
```

</TabItem>
</Tabs>

## Basic usage

```typescript
import { BasePlugin, registerPlugin, BaseEvents } from '@codeceptjs-plugins/base'

// 1. Create a plugin class
class CustomPlugin extends BasePlugin {
  constructor(config) {
    super(config, { namespace: 'my-custom-plugin' })
  }

  beforeSuite(suite: BaseEvents.suite.before): void {
    console.log('beforeSuite', suite)
  }
}

// 2. Register a plugin
module.exports = (userSettings: Record<string, any>): CustomPlugin  => {
  const pluginInstanse = registerPlugin(new CustomPlugin(userSettings))

  return pluginInstanse
}
```

## Interface

```typescript
interface BasePlugin {
  logger: Logger
  config: Record<string, any>

  constructor(config: Record<string, any>, options: BasePluginOptionsType)

  startedHook(): void | Promise<void>
  passedHook(): void | Promise<void>
  beforeStep(step: BaseEvents.step.before): void | Promise<void>
  afterStep(step: BaseEvents.step.before): void | Promise<void>
  startedStep(step: BaseEvents.step.before): void | Promise<void>
  finishedStep(step: BaseEvents.step.after): void | Promise<void>
  passedStep(step: BaseEvents.step.passed): void | Promise<void>
  failedStep(step: BaseEvents.step.failed): void | Promise<void>
  beforeTest(test: BaseEvents.test.before): void | Promise<void>
  afterTest(test: BaseEvents.test.after): void | Promise<void>
  startedTest(test: BaseEvents.test.before): void | Promise<void>
  finishedTest(test: BaseEvents.test.after): void | Promise<void>
  passedTest(test: BaseEvents.test.after): void | Promise<void>
  failedTest(
      test: BaseEvents.test.before | BaseEvents.suite.before,
      error: BaseEvents.test.error
  ): void | Promise<void>
  beforeSuite(suite: BaseEvents.suite.before): void | Promise<void>
  afterSuite(suite: BaseEvents.suite.after): void | Promise<void>
  skippedTest(test: BaseEvents.test.after): void | Promise<void>
  resultAll(): void | Promise<void>
  beforeAll(): void | Promise<void>
  afterAll(): void | Promise<void>
}
```
