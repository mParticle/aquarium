import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const componentsIndexPath = resolve(process.cwd(), 'src/components/index.ts')
const iconsIndexPath = resolve(process.cwd(), 'src/components/icons/index.ts')

const getRoktIconsFromUntitledUiImport = (source: string): Set<string> => {
  const importBlockMatch = source.match(/import\s*\{([\s\S]*?)\}\s*from\s*['"]@untitledui\/icons['"]/)
  if (importBlockMatch == null) return new Set()

  const aliases = [...importBlockMatch[1].matchAll(/\bas\s+(Rokt[A-Za-z0-9]+)\b/g)].map(match => match[1])
  return new Set(aliases)
}

const getRoktExportsFromComponentsIndex = (source: string): Set<string> => {
  const exportBlockMatch = source.match(
    /\/\/ Export Rokt icons from @untitledui\/icons\s*export\s*\{([\s\S]*?)\}\s*from\s*['"]\.\/icons['"]/,
  )
  if (exportBlockMatch == null) return new Set()

  const names = exportBlockMatch[1]
    .split(',')
    .map(name => name.trim())
    .filter(name => /^Rokt[A-Za-z0-9]+$/.test(name))

  return new Set(names)
}

describe('Rokt icon exports gate', () => {
  it('keeps src/components/index.ts in sync with src/components/icons/index.ts', () => {
    const componentsIndexSource = readFileSync(componentsIndexPath, 'utf8')
    const iconsIndexSource = readFileSync(iconsIndexPath, 'utf8')

    const roktIconsInIconsIndex = getRoktIconsFromUntitledUiImport(iconsIndexSource)
    const roktIconsInComponentsIndex = getRoktExportsFromComponentsIndex(componentsIndexSource)

    const missingInComponentsIndex = [...roktIconsInIconsIndex]
      .filter(name => !roktIconsInComponentsIndex.has(name))
      .sort()
    const extraInComponentsIndex = [...roktIconsInComponentsIndex]
      .filter(name => !roktIconsInIconsIndex.has(name))
      .sort()

    expect(
      {
        missingInComponentsIndex,
        extraInComponentsIndex,
      },
      [
        'Rokt icon exports are out of sync between:',
        '- src/components/icons/index.ts',
        '- src/components/index.ts',
        '',
        'If you added a new Untitled UI icon alias (Rokt*), make sure it is exported from src/components/index.ts too.',
      ].join('\n'),
    ).toEqual({
      missingInComponentsIndex: [],
      extraInComponentsIndex: [],
    })
  })
})
