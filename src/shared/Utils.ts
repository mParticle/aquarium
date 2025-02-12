import * as fnv from 'fnv-plus'

export function generateUniversalHash(value: string, caseSensitive: boolean = false): string {
    if(!value) return "";
    
    const trimmedValue = value.trim()
    
    if (caseSensitive) {
        // Matches behavior in SchemaIdGenerator.cs
        return fnv.hash(' ' + trimmedValue)?.dec() ?? 0   
    }

    return fnv.hash(trimmedValue.toUpperCase())?.dec() ?? 0
}