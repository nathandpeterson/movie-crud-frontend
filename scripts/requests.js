let localServer = 'http://localhost:3000'

const request = {
  getMovies () {
    return axios.get(`${localServer}/movies`)
  },
  showOne(id){
    return axios.get(`${localServer}/movies/${id}`)
  },
  update(id, body){
    return axios.put(`${localServer}/movies/${id}`, body)
    .then(response => {
      renderMovies.init()
    })
  },
  create(data){
    return axios.post(`${localServer}/movies`, data)
  },
  destroy(id){
    return axios.delete(`${localServer}/movies/${id}`)
    .then(response => renderMovies.init())
  }
}
