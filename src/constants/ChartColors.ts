const chartBaseColors = {
  primary: '#1cbc97',
  purple: '#5206b8',
  cyan: '#00c2df',
  yellow: '#f7d40f',
  sapphire: '#223ce0',
  kelly: '#0cab61',
  teal: '#99cd0f',
  gold: '#f7bd0f',
  lime: '#d2eff4',

  secondaryPrimary: '#19d1a7',
  secondaryPurple: '#832bf8',
  secondaryCoral: '#ff8666',
  secondaryPrimaryDark: '#00755a',
  secondaryCyan: '#00dafa',
  secondaryYellow: '#ffe77c',
  secondarySapphire: '#0087f6',
  secondaryKelly: '#00cd6e',
  secondaryTeal: '#00fad7',
  secondaryGold: '#f7d40f',
  secondaryLime: '#a7e504',
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
