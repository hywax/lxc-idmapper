export interface MapperMatch {
  containerId: number
  hostId: number
}

export interface MapperResult {
  idMap: string[]
  subId: string[]
}

export function mapper(_matches: MapperMatch[]): MapperResult {
  return {
    idMap: [],
    subId: [],
  }
}
