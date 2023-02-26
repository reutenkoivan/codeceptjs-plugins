export const supportedDrivers = [
  'Puppeteer',
  'Playwright',
]

export const hooks = {
  testFailed: '[HtmlSnapshot]_testFailedHook',
}

export const namespace = 'html-snapshot-on-fail'
