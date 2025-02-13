import type { MapperMatch } from '../src'
import { describe, expect, it } from 'vitest'
import { mapper } from '../src'

describe('mapper', () => {
  it('should handle an empty array', () => {
    const matches: MapperMatch[] = []
    const result = {
      idMap: [],
      subId: [],
    }

    expect(mapper(matches)).toEqual(result)
  })

  it('should generation of a single match', () => {
    const matches = [
      { containerId: 1000, hostId: 1005 },
    ]
    const result = {
      idMap: [
        '0 100000 1000',
        '1000 1005 1',
        '1001 101001 64535',
      ],
      subId: [
        'root:1000:1',
      ],
    }

    expect(mapper(matches)).toEqual(result)
  })

  it('should generation of multiple comparisons', () => {
    const matches = [
      { containerId: 44, hostId: 44 },
      { containerId: 107, hostId: 104 },
    ]
    const result = {
      idMap: [
        '0 100000 44',
        '44 44 1',
        '45 100045 63',
        '107 104 1',
        '108 100108 65428',
      ],
      subId: [
        'root:44:1',
        'root:107:1',
      ],
    }

    expect(mapper(matches)).toEqual(result)
  })
})
