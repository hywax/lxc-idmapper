import { describe, expect, it } from 'vitest'
import { mapper } from '../src'

describe('mapper', () => {
  it.todo('correct generation of a single match', () => {
    const matches = [
      { containerId: 1000, hostId: 1005 },
    ]
    const result = {
      idMap: [
        'u 0 100000 1000',
        'g 0 100000 1000',
        'u 1000 1005 1',
        'g 1000 1005 1',
        'u 1001 101001 64535',
        'g 1001 101001 64535',
      ],
      subId: [
        'root:1005:1',
      ],
    }

    expect(mapper(matches)).toEqual(result)
  })

  it.todo('correct generation of multiple comparisons', () => {
    const matches = [
      { containerId: 44, hostId: 44 },
      { containerId: 107, hostId: 104 },
    ]
    const result = {
      idMap: [
        'u 0 100000 44',
        'g 0 100000 44',
        'u 44 44 1',
        'g 44 44 1',
        'u 45 100045 62',
        'g 45 100045 62',
        'u 107 104 1',
        'g 107 104 1',
        'u 108 100108 65428',
        'g 108 100108 65428',
      ],
      subId: [
        'root:44:1',
        'root:104:1',
      ],
    }

    expect(mapper(matches)).toEqual(result)
  })
})
