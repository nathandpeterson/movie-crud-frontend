// Activate buttons on menus and collect update input
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
          this.updateButtons()
      })
    })
  },
  create(){
    document.querySelector('.create-movie-form').addEventListener('click', () => {
      renderForms.newMovieForm()
    })
  },
  new(){
    let submitNewMovie = document.querySelector('.submit-movie')
    submitNewMovie.addEventListener('click', (e) =>{
        e.preventDefault()
        let data = collectFormData()
        if(!data) return
        request.create(data)
        .then(res => renderMovies.init())
    })
  },
  updateButtons(){
    document.querySelector('.all-movies').addEventListener('click', (e) => {
      e.preventDefault()
      renderMovies.init()
    })
    document.querySelector('.submit-movie').addEventListener('click', (e) => {
      e.preventDefault()
      let updatedData = collectFormData()
      let updateID = e.target.id
      request.update(updateID, updatedData)
      renderMovies.init()
    })
  }
}
