---
title: Logger
---

## Access method:
```
this.logger
```

## Interface:
```typescript
interface Logger {
    debug(message: string, data?: any): void
    say(message: string, data?: any): void
    error(error: string | Error): void
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
