import path from 'path'
import fs, { WriteFileOptions } from 'fs'

export const writeFile = (filePath: string, content: string | Buffer, options: WriteFileOptions = {}): void => {
  const dirpath = path.dirname(filePath)

  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true })
  }

  fs.writeFileSync(filePath, content, options)
}
