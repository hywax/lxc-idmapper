export interface MapperMatch {
  containerId: number
  hostId: number
}

export interface MapperResult {
  idMap: string[]
  subId: string[]
}

function createIdMap(matches: MapperMatch[]): string[] {
  const buffer: string[] = []

  for (const [index, match] of matches.entries()) {
    const { containerId, hostId } = match

    if (index === 0) {
      buffer.push(`0 100000 ${containerId}`)
    } else if (matches[index].containerId !== matches[index - 1].containerId + 1) {
      buffer.push(`${matches[index - 1].containerId + 1} ${matches[index - 1].containerId + 100001} ${containerId - matches[index - 1].containerId}`)
    }

    buffer.push(`${containerId} ${hostId} 1`)

    if (index === matches.length - 1) {
      buffer.push(`${containerId + 1} ${containerId + 100001} ${65535 - containerId}`)
    }
  }

  return buffer
}

function createSubId(matches: MapperMatch[]): string[] {
  return matches.map((match) => `root:${match.hostId}:1`)
}

function sortMatches(matches: MapperMatch[]): MapperMatch[] {
  return matches.toSorted((a, b) => a.containerId - b.containerId)
}

export function mapper(matches: MapperMatch[]): MapperResult {
  const sortedMatches = sortMatches(matches)
  const idMap = createIdMap(sortedMatches)
  const subId = createSubId(sortedMatches)

  return { idMap, subId }
}
