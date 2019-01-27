class API {
  static baseURL = 'http://localhost:3005/stories';

  static getStories() {
    return fetch(this.baseURL)
            .then(resp => {
              return resp.json()
            }).catch(err => {
              console.log(err)
            })
  }

  static getStory(id) {
    return fetch(`${this.baseURL}/${id}`)
            .then(resp => {
              return resp.json()
            }).catch(err => {
              console.log(err)
            })
  }

  static createStory(story) {
    return fetch(this.baseURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(story)
    })
    .then(resp => resp.json())
    .catch(err => console.log(err))
  }

  static updateStory(story) {
    return fetch(`${this.baseURL}/${story._id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(story)
    })
    .then(resp => resp.json())
    .catch(err => console.log(err))
  }

  static addComment(id, commentObj) {
    return fetch(`${this.baseURL}/${id}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(commentObj)
    })
    .then(resp => resp.json())
    .catch(err => console.log(err))
  }
}

export default API