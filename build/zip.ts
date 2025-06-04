/* eslint-disable no-console */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { zip } from 'zip-a-folder'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function createZip() {
  const browser = process.argv[2]

  if (!browser || !['chrome', 'firefox'].includes(browser)) {
    console.error('Error: Browser name (chrome/firefox) must be provided as an argument.')
    console.error('Usage: bun run build/zip.ts <chrome|firefox>')
    process.exit(1)
  }

  try {
    const projectRoot = path.resolve(__dirname, '..')

    const packageJsonPath = path.join(projectRoot, 'package.json')
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8')
    const packageJson = JSON.parse(packageJsonContent)
    const version = packageJson.version

    if (!version) {
      console.error('Error: Version not found in package.json')
      process.exit(1)
    }

    const sourceDir = path.join(projectRoot, 'dist', browser)
    const outputZipName = `${browser}-${version}.zip`
    const outputZipPath = path.join(projectRoot, outputZipName)

    if (!fs.existsSync(sourceDir)) {
      console.error(`Error: Source directory ${sourceDir} does not exist.`)
      console.error(`Did you run "bun run build:${browser}" first?`)
      process.exit(1)
    }

    console.log(`Zipping ${sourceDir} to ${outputZipPath}...`)
    await zip(sourceDir, outputZipPath)
    console.log(`Successfully created ${outputZipPath}`)
  }
  catch (error) {
    console.error('Error during zipping process:', error)
    process.exit(1)
  }
}

createZip()
