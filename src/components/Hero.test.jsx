import { describe, it, expect } from 'vitest'

// Simple test to verify testing setup
describe('Hero Component', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should verify string operations', () => {
    const greeting = 'Hello World'
    expect(greeting).toContain('Hello')
    expect(greeting.length).toBe(11)
  })
})