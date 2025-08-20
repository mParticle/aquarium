const DEFAULTS = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
} as const

export interface IDateRangeStringProps {
  start: Date
  end: Date
  formatOptions?: Intl.DateTimeFormatOptions
}

export const DateRangeString = ({ start, end, formatOptions = DEFAULTS }: IDateRangeStringProps) => (
  <>
    {new Intl.DateTimeFormat('en-US', {
      ...formatOptions,
    }).formatRange(start, end)}
  </>
)
