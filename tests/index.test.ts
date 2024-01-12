import maxArea from '../src/index'

describe('maxArea', () => {
  describe('when all numbers are greater than zero', () => {
    it('returns 2', () => {
      const height: number[] = [1, 2, 1]

      expect(maxArea(height)).toEqual(2)
    })

    it('returns 49', () => {
      const height: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7]

      expect(maxArea(height)).toEqual(49)
    })

    it('returns 12', () => {
      const height: number[] = [0, 2, 3, 1, 8, 8, 3]

      expect(maxArea(height)).toEqual(12)
    })

    it('returns 15', () => {
      const height: number[] = [10, 2, 3, 5]

      expect(maxArea(height)).toEqual(15)
    })

    it('returns 10', () => {
      const height: number[] = [10, 10]

      expect(maxArea(height)).toEqual(10)
    })

    it('returns 3', () => {
      const height: number[] = [104, 2, 0, 1]

      expect(maxArea(height)).toEqual(3)
    })
  })

  describe('when there is a zero height', () => {
    it('returns 0', () => {
      const height: number[] = [1000, 0]

      expect(maxArea(height)).toEqual(0)
    })
  })
})
