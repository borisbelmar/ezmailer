import fs from 'fs/promises'

const withFileExtensionRegex = /^([\w\d]+\.[\w\d]{1,10})$/


export default async function getAttachmentsFromDir (dirPath) {
  const files = await fs.readdir(dirPath)
  return files
    .filter(fileOrDir => withFileExtensionRegex.test(fileOrDir))
    .map(file => ({
      filename: file,
      path: `${dirPath}/${file}`,
      cid: file
    }))
}

