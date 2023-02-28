import path from 'path'
import { recorder } from 'codeceptjs'
import { BasePlugin, BaseEvents } from '@codeceptjs-plugins/base'

import { getFileName } from './utils/getFileName'
import { writeFile } from './utils/writeFile'

import { namespace, hooks } from './constants'
import { HTMLOnFailPlugin } from './types'

export class HTMLSnapshotOnFail extends BasePlugin {
  bus: HTMLOnFailPlugin.bus

  constructor(config: HTMLOnFailPlugin.config, bus: HTMLOnFailPlugin.bus) {
    super(config, { namespace })
    this.bus = bus
  }

  failedTest(test: BaseEvents.test.before): void {
    recorder.add(hooks.testFailed, async () => {
      const html = await this.bus.driver.page.content()

      try {
        if (this.bus.reporter) {
          this.logger.say('Attaching html snapshot to reporter.')
          this.bus.reporter.addAttachment('Last Html Snapshot', Buffer.from(html), 'text/html')
        }

        if (this.config.writeFile || !this.bus.reporter) {
          const uuid = test.uuid || test?.ctx?.test.uuid || Math.floor(new Date().getTime() / 1000)

          const base = test?.ctx?.test.type === 'hook' ? `${test.title}_${test.ctx.test.title}` : test.title
          const postfix = this.config.uniqNames ? `_${uuid}_failed` : '_failed'

          const fileName = getFileName(this.config.dirpath, base, postfix)
          const filePath = path.resolve(this.config.dirpath, `${fileName}.html`)

          this.logger.say('Saving HTML snapshot to file:', filePath)
          writeFile(filePath, html, { encoding: 'utf8' })
        }
      } catch (err) {
        const isRuntimeErrorMessage = err.message.includes('was terminated due to') || err.message.includes('no such window: target window already closed')

        if (err.type === 'RuntimeError' && isRuntimeErrorMessage) {
          this.bus.driver.isRunning = false
        }
      }
    })

    recorder.catch((err: Error) => {
      this.logger.error(err)
      process.exit(1)
    })
  }
}
