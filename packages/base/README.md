# [@codeceptjs-plugins/base](https://reutenkoivan.github.io/codeceptjs-plugins/base)

![npm](https://img.shields.io/npm/v/@codeceptjs-plugins/base)
![license](https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000)

This is a base plugin for CodeceptJS plugins. It provides a plugin entity as class instead of a function, which is more convenient to use.
It also provides a plugin register which automatically subscribes to CodeceptJS events and calls plugin methods.

## Installation

```bash
npm i --save-dev @codeceptjs-plugins/base
```

```bash
yarn add --dev @codeceptjs-plugins/base
```

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
