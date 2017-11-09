const renderMovies = {
  init (){
    request.getMovies()
      .then(movies => {
      let cardContainer = document.querySelector('.card-deck')
      let moviesArr = movies.data
      moviesArr.forEach(movie => {
        let card = makeCard(movie)
        cardContainer.innerHTML += card
        })
      })
  },
  showOne(id){
    request.showOne(id)
    .then(data => {
      let movie = data.data
      let cardContainer = document.querySelector('.card-deck')
      let card = makeFullCard(movie)
      cardContainer.innerHTML = card
      this.activateShowButtons()
    })
  },
  activateShowButtons(){
    let update = document.querySelector('.edit-movie')
    update.addEventListener('click', (e) => {
    e.preventDefault()
    request.showOne(e.target.id)
      .then(data => {
        renderForms.updateMovie(data.data)
      })
    })
  }
}
