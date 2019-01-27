import API from '../api/API'

describe('API', () => {
  it('has a base URL of http://localhost:3005/stories', () => {
    expect(API.baseURL).toBe('http://localhost:3005/stories')
  })
  it('can create a new story', () => {
    const date = new Date() //.toISOString()
    const newStory = {
      title: 'need to finish',
      url: 'http://ctrlaltpat.github.io',
      submitter: 'Patrick',
      date_submitted: date,
      points: 29,
      comments: []
    }
    expect(API.createStory(newStory)).resolves.toEqual({
      title: 'need to finish',
      url: 'http://ctrlaltpat.github.io',
      submitter: 'Patrick',
      date_submitted: date,
      points: 29,
      comments: []
    })
  })
})