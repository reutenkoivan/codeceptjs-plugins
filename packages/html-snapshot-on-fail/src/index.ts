import path from 'path'
import { container } from 'codeceptjs'
import { testDataAggregator, Logger } from '@codeceptjs-plugins/base'

import { HTMLSnapshotOnFail } from './htmlSnapshotOnFail'
import { getDriver } from './utils/getDriver'

import { namespace, supportedDrivers } from './constants'
import { HTMLOnFailPlugin } from './types'

const defaultConfig = {
  dirname: 'html-snapshots-on-fail',
  rootDir: global.output_dir,
  uniqNames: false,
  wrightFile: true,
}

const pack = require('../package.json')

module.exports = (userSettings: HTMLOnFailPlugin.userSettings): void => {
  Logger.version(namespace, pack.version)

  const baseSettings = Object.assign(defaultConfig, userSettings)
  const config = Object.assign(baseSettings, {
    dirpath: path.resolve(baseSettings.rootDir, baseSettings.dirname),
  })

  const driver = getDriver()

  if (!driver) {
    Logger.info(namespace, `Not found supported drivers for creating html snapshots. Supported: "${supportedDrivers}"`)

    return
  }

  testDataAggregator(new HTMLSnapshotOnFail(config, {
    driver,
    reporter: container.plugins('allure'),
  }))
}
