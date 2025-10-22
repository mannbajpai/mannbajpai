import { describe, it, expect } from 'vitest'
import { formatTechStack, getProjectCategoryColor } from '../utils/helpers'

describe('Utility Functions', () => {
  describe('formatTechStack', () => {
    it('should format array of tech names into a string', () => {
      const techStack = ['React', 'Node.js', 'MongoDB']
      const result = formatTechStack(techStack)
      expect(result).toBe('React • Node.js • MongoDB')
    })

    it('should handle empty array', () => {
      const result = formatTechStack([])
      expect(result).toBe('')
    })

    it('should handle single item', () => {
      const result = formatTechStack(['React'])
      expect(result).toBe('React')
    })
  })

  describe('getProjectCategoryColor', () => {
    it('should return correct badge class for Full-Stack', () => {
      expect(getProjectCategoryColor('Full-Stack')).toBe('badge-primary')
    })

    it('should return correct badge class for AI/ML', () => {
      expect(getProjectCategoryColor('AI/ML')).toBe('badge-secondary')
    })

    it('should return default class for unknown category', () => {
      expect(getProjectCategoryColor('Unknown')).toBe('badge-neutral')
    })
  })
})