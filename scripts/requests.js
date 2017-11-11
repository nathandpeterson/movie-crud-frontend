let localServer = 'http://localhost:3000'
let herokuServer = 'https://sleepy-stream-27738.herokuapp.com'

const request = {
  getMovies () {
    return axios.get(`${herokuServer}/movies`)
  },
  showOne(id){
    return axios.get(`${herokuServer}/movies/${id}`)
  },
  update(id, body){
    return axios.put(`${herokuServer}/movies/${id}`, body)
    .then(response => {
      renderMovies.init()
    })
  },
  create(data){
    return axios.post(`${herokuServer}/movies`, data)
  },
  destroy(id){
    return axios.delete(`${herokuServer}/movies/${id}`)
    .then(response => renderMovies.init())
  }
}
