
const crud = {
  destroy(id){
    request.destroy(id)
    renderMovies.init()
  },
  createMovie(){
    request.create(response => console.log(response))
    renderMovies.init()
  }
}

document.addEventListener('DOMContentLoaded',() => {
  renderMovies.init()
})
