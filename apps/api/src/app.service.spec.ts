import { describe, expect, it } from 'vitest'
import { AppService } from './app.service'

describe('AppService', () => {
  it('getState returns ok + hello message', () => {
    const service = new AppService()
    const state = service.getState()

    expect(state.status).toBe('ok')
    expect(typeof state.timestamp).toBe('string')
    expect(typeof state.uptime).toBe('number')
    expect(state.message).toBe('Hello World')
  })
})
