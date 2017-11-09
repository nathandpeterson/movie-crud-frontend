

const activate = {
  home(){
    document.querySelector('.all-movies').addEventListener('click', () => {
      renderMovies.init()
    })
  },
  del(){
    document.querySelector('.delete-movie').addEventListener('click', (e) => {
      e.preventDefault()
      request.destroy(e.target.id)
    })
  },
  update(){
    let update = document.querySelector('.edit-movie')
    update.addEventListener('click', (e) => {
      e.preventDefault()
      request.showOne(e.target.id)
        .then(data => {
          renderForms.updateMovie(data.data)
      })
    })
  },
  new(){

  },
  create(){
    document.querySelector('.create-movie').addEventListener('click', () => {
      renderForms.newMovie()
    })
  }
}
