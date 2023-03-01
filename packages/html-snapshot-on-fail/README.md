# [@codeceptjs-plugins/html-snapshot-on-fail](https://reutenkoivan.github.io/codeceptjs-plugins/html-snapshot-on-fail)

![npm](https://img.shields.io/npm/v/@codeceptjs-plugins/html-snapshot-on-fail)
![license](https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000)

This plugin takes a snapshot of the current page HTML and saves it to a file when a test fails.

## Installation

```bash
npm i --save-dev @codeceptjs-plugins/html-snapshot-on-fail
```

```bash
yarn add --dev @codeceptjs-plugins/html-snapshot-on-fail
```

## Basic usage

```typescript
exports.config = {
  plugins: {
    htmlSnapshotOnFail: {
      require: "@codeceptjs-plugins/html-snapshot-on-fail",
      enabled: true
    }
  }
}
```

## configure custom output directory
```typescript
const path = require('path')

exports.config = {
  plugins: {
    htmlSnapshotOnFail: {
      require: "@codeceptjs-plugins/html-snapshot-on-fail",
      enabled: true,
      rootDir: path.resolve('output'),
      dirname: 'error-html-snapshots'
    }
  }
}
```

## connect to allure reporter
```typescript
exports.config = {
  plugins: {
    allure: {
      require: "<require path>",
    },
    htmlSnapshotOnFail: {
      require: "@codeceptjs-plugins/html-snapshot-on-fail",
      enabled: true,
      reporter: 'allure' // key of registered allure plugin in "exports.config.plugins"
    }
  }
}
```
