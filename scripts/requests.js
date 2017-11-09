let localServer = 'http://localhost:3000'

const request = {
  getMovies () {
    return axios.get(`${localServer}/movies`)
  },
  showOne(id){
    return axios.get(`${localServer}/movies/${id}`)
  },
  update(id){
    return axios.post(`${localServer}/movies/${id}`)
  },
  create(){
    return axios.post(`${localServer}/movies`)
  },
  destroy(id){
    return axios.delete(`${localServer}/movies/${id}`)
  }
}
