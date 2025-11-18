import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function main() {
  const cjsDir = join(__dirname, '..', 'dist', 'cjs')
  await mkdir(cjsDir, { recursive: true })
  const pkgJsonPath = join(cjsDir, 'package.json')
  const pkgJson = { type: 'commonjs' }
  await writeFile(pkgJsonPath, `${JSON.stringify(pkgJson, null, 2)}\n`, 'utf8')
  // optional: you can add more post-build steps here if ever needed
}

main().catch(err => {
  console.error('[postbuild-cjs] failed:', err)
  process.exit(1)
})
