import * as fnv from 'fnv-plus'

export function generateUniversalHash(name: string, caseSensitive: boolean = false): string | number {
    const trim = name?.trim()
    if (!trim) return 0

    // Matches behavior in SchemaIdGenerator.cs
    if (caseSensitive) return fnv.hash(' ' + trim)?.value ?? 0

    return fnv.hash(trim.toUpperCase())?.value ?? 0
}