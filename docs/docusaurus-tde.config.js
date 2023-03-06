const path = require('path')
const { dropdownBuilder } = require('./utils/dropdownBuilder')

module.exports = {
  logo: './assets/logo.png',
  title: 'codeceptjs-plugins',
  baseUrl: process.env.BASE_URL,
  navbar: {
    support: {
      url: 'https://github.com/reutenkoivan/codeceptjs-plugins/issues',
    },
    repository: {
      url: 'https://github.com/reutenkoivan/codeceptjs-plugins',
    },
  },
  themes: [
    '@docusaurus-tde/components-theme',
  ],
  hooks: [
    ['@docusaurus-tde/debug-hook', { enabled: !process.env.CI, logs: !!process.env.CI }],
    ['@docusaurus-tde/custom-css-hook', { source: './custom.css' }],
    ['@docusaurus-tde/package-documentation-hook', { dropdownBuilder }],
    ['@docusaurus-tde/react-pages-hook', { root: path.join(__dirname, 'react-pages'), exclude: ['components/**'] }],
    ['@docusaurus-tde/static-assets-hook', { staticDirectories: [path.join(__dirname, 'assets')] }],
  ],
}
