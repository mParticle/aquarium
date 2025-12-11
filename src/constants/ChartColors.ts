const chartBaseColors = {
  primary: '#C20075',
  secondary: '#480029',
  accent: '#E5368A',
  sapphire: '#1677FF',
  teal: '#13C2C2',
  emerald: '#52C41A',
  amber: '#FAAD14',
  slate: '#6E6E73',

  primaryLight: '#ED87C3',
  secondaryLight: '#6D0042',
  accentLight: '#F5B8DC',
  sapphireLight: '#4096FF',
  tealLight: '#36CFC9',
  emeraldLight: '#73D13D',
  amberLight: '#FFC53D',
  slateLight: '#86868B',
} as const

export const ChartColors: string[] = [0, -42, 37, -69, 62]
  .map(alpha => Object.values(chartBaseColors).map(hex => shadeColor(hex, alpha)))
  .flat()

function shadeColor(col: string, amt: number): string {
  // negative number darkens, positive number lightens
  // via https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
  col = col.replace(/^#/, '')
  if (col.length === 3) {
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]
  }

  let [r, g, b] = col.match(/.{2}/g) as Array<number | string>
  ;[r, g, b] = [
    Number.parseInt(r as string, 16) + amt,
    Number.parseInt(g as string, 16) + amt,
    Number.parseInt(b as string, 16) + amt,
  ]

  r = Math.max(Math.min(255, r), 0).toString(16)
  g = Math.max(Math.min(255, g), 0).toString(16)
  b = Math.max(Math.min(255, b), 0).toString(16)

  const rr = (r.length < 2 ? '0' : '') + r
  const gg = (g.length < 2 ? '0' : '') + g
  const bb = (b.length < 2 ? '0' : '') + b

  return `#${rr}${gg}${bb}`
}
