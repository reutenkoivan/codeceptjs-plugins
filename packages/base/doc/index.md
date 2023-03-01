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
  const pluginInstanse = registerPlugin(new CustomPlugin())

  return pluginInstanse
}
```

## Configure custom logger processor

```typescript
import fs from 'fs'
import path from 'path'
import { LoggerProcessorContract, BasePlugin } from '@codeceptjs-plugins/base'

// 1. Create a logger processor class
const logFileStream = fs.createWriteStream(path.resolve(global.output_dir, 'custom.log'))
const output = new console.Console(logFileStream, logFileStream)

class CustomLoggerProcessor implements LoggerProcessorContract {
  info(message: string): void {
    output.log('info', message)
  }

  debug(scope: string, message: string): void {
    output.log('debug', scope, message)
  }

  error(message: string): void {
    output.log('error', message)
  }
}

// 2. Create a plugin class
class CustomPlugin extends BasePlugin {
  constructor(config) {
    super(config, {namespace: 'my-custom-plugin', loggerProcessor: new CustomLoggerProcessor()})
  }
}
```
