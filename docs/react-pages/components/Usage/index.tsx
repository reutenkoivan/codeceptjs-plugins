import React from 'react'
// @ts-ignore
import CodeBlock from "@theme/CodeBlock";
// @ts-ignore
import styles from './usage.module.css'

const structure = `
├── custom-plugin
│   ├── custom-plugin.ts
│   └── index.ts
└── codecept.conf.js
`.trim()

const customPlugin = `
// custom-plugin.ts
import { BasePlugin, registerPlugin, BaseEvents } from '@codeceptjs-plugins/base'

export class CustomPlugin extends BasePlugin {
  constructor(config) {
    super(config, { namespace: 'my-custom-plugin' })
  }

  beforeSuite(suite: BaseEvents.suite.before): void {
    this.logger.debug('Message from the beforeSuite handler: ', suite)
  }
}
`.trim()

const pluginMainFile = `
// index.ts
import { CustomPlugin } from './custom-plugin'

module.exports = (userSettings: Record<string, any>): CustomPlugin  => {
  const pluginInstance = registerPlugin(new CustomPlugin(userSettings))

  return pluginInstance
}
`.trim()

const configConnection = `
// codecept.conf.js
module.exports = {
  plugins: {
    customPlugin: {
      require: './custom-plugin',
      enabled: true,
    },
  },
}
`.trim()

export const UsageExample = () => {
  return (
    <>
      <div className={styles.registerPipelineContainer}>
        <CodeBlock language={'bash'} title={'File structure'} children={structure}/>
      </div>
      <div className={styles.registerPipelineContainer}>
        <CodeBlock language={'typescript'} title={'Create a plugin class that extends the BasePlugin class.'} children={customPlugin}/>
      </div>
      <div className={styles.registerPipelineContainer}>
        <CodeBlock language={'typescript'} title={'Build created plugin.'} children={pluginMainFile}/>
      </div>
      <div className={styles.registerPipelineContainer}>
        <CodeBlock language={'typescript'} title={'Register created plugin in config.'} children={configConnection}/>
      </div>
    </>
  )
}
