

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
          document.querySelector('.submit-movie').addEventListener('click', (e) => {
            e.preventDefault()
            let updatedData = this.collectFormData()
            let updateID = e.target.id
            console.log(updateID, updatedData)
            request.update(updateID, updatedData)
            renderMovies.init()
          })
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
        let data = this.collectFormData()
        request.create(data)
        .then(res => renderMovies.init())
    })
  },
  collectFormData(){
    let data = {}
    data.title = document.querySelector('#movie-title').value
    data.plot = document.querySelector('#movie-plot').value
    data.year = document.querySelector('#movie-year').value
    data.image_url = document.querySelector('#movie-image-url').value
    data.rating = document.querySelector('#movie-rating').value
    return data
  }
}
