export type Odds = {
  team: number
  count: number
  teamName: string
}

export const defaultOdds: Odds[] = [
  { team: 1, count: 1, teamName: 'Krak Pipes' },
  { team: 2, count: 2, teamName: 'Greasers' },
  { team: 3, count: 3, teamName: 'Bob Probert' },
  { team: 4, count: 4, teamName: 'Big Red Dawgs' },
  { team: 5, count: 5, teamName: 'The 5-Holes' },
  { team: 6, count: 6, teamName: 'The Gender Benders' }
]

export const getTeam = (num: number) => {
  return defaultOdds[defaultOdds.findIndex( (o) => o.team === num)];
}