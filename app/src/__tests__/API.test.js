import API from '../api/API'

describe('API', () => {
  it('has a base URL of http://localhost:3005/stories', () => {
    expect(API.baseURL).toBe('http://localhost:3005/stories')
  })
})