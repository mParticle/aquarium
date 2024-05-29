import { faker } from '@faker-js/faker'

export type ObservabilityRecord = {
  timestamp: string
  traceId: string
  input: string
  output: string
  mPID: number
  environment: string
  status: 'success' | 'default' | 'error' | 'warning'
  eventName: string
  eventType: 'event' | 'identity'
}

export const createMockObservabilityRecord = (part: Partial<ObservabilityRecord> = {}): ObservabilityRecord => {
  const eventType = part.eventType ?? faker.helpers.arrayElement(['event', 'identity'] as const)
  return {
    timestamp: faker.date.recent().toISOString(),
    traceId: faker.helpers.fromRegExp('[A-Z]{5}-[0-9]{5}'),
    input: faker.helpers.arrayElement(['Android', 'iOS', 'Salesforce', 'Web']),
    output: faker.lorem.words(4),
    mPID: faker.number.int(),
    environment: faker.helpers.arrayElement(['Dev', 'Prod']),
    status: faker.helpers.arrayElement(['success', 'default', 'error', 'warning']),
    eventType,
    eventName: eventType === 'event' ? faker.helpers.arrayElement(['uninstall', 'crash_report']) : 'merge',
    ...part,
  }
}
