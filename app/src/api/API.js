class API {
  static baseURL = 'http://localhost:3005/stories';

  static get(url) {
    return fetch(url)
            .then(res => res.json()
              .then(data => {
                console.log("something")
              })
            ).catch(err => {
              console.log(err)
            })
  }
}

export default API