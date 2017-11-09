const renderMovies = {
  init (){
    request.getMovies()
      .then(movies => {
      let cardContainer = document.querySelector('.card-deck')
      cardContainer.innerHTML = ''
      let moviesArr = movies.data
      moviesArr.forEach(movie => {
        let card = makeCard(movie)
        cardContainer.innerHTML += card
        })
      cardContainer.innerHTML += createButton()
      activate.create()
      this.activateShowBtns()
      })
  },
  showOne(id){
    request.showOne(id)
    .then(data => {
      let movie = data.data
      let cardContainer = document.querySelector('.card-deck')
      let card = makeFullCard(movie)
      cardContainer.innerHTML = card
      activate.home()
      activate.del()
      activate.update()
    })
  },
  activateShowBtns(){
    let showButtons = document.querySelectorAll('.show-movie')
    for(let i=0; i < showButtons.length; i++){
      showButtons[i].addEventListener('click', (e) => {
        e.preventDefault()
        this.showOne(e.target.id)
      })
    }
  }
}
