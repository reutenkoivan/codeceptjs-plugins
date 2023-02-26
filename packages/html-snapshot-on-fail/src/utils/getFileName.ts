import { humanizeHashLongStr } from 'humanize-hash-long-str'

const replaceMap = {
  ' ': '_',
  '.': '_',
  '/': '_',
  ':': '_',
  '|': '_',
  '\\': '_',
  '"': '\'',
  '?': '.',
  '*': '^',
  '<': '(',
  '>': ')',
  '\'': '',
}

const clearString = (target: string, replaceMap: Record<string, string>): string => {
  let cleanStr = ''

  for (const char of target) {
    if (char in replaceMap) {
      cleanStr += replaceMap[char]
    } else {
      cleanStr += char
    }
  }

  return cleanStr
}

export const getFileName = (dirpath: string, base: string, postfix: string): string => {
  let fileName = clearString(base.toLowerCase().trim(), replaceMap)

  if (fileName.includes('{')) {
    fileName = fileName.substr(0, (fileName.indexOf('{') - 3))
  }

  if (postfix) {
    fileName += postfix
  }

  return humanizeHashLongStr(fileName, { maxLength: 220 - dirpath.length - postfix.length })
}
