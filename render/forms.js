const renderForms = {
  newMovieForm(){
    let container = document.querySelector('.card-deck')
    container.innerHTML = form()
    activate.home()
    activate.new()
  },
  updateMovie(data){
    let container = document.querySelector('.card-deck')
    container.innerHTML = form()
    document.querySelector('#movie-title').value = data.title
    document.querySelector('#movie-plot').value = data.plot
    document.querySelector('#movie-year').value = data.year
    document.querySelector('#movie-image-url').value = data.image_url
    document.querySelector('#movie-rating').value = data.rating
  }
}
