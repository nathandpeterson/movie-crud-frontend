
function createButton(){
  return `
  <div class="container create-button">
    <button type="button" class="btn btn-block btn-primary create-movie-form">Add new movie</button>
  </div>
  `
}

function makeCard(card){
  return `
    <div class="card">
      <img class="card-img-top" src="${card.image_url}" alt="${card.title} movie poster image">
      <div class="card-block">
        <h4 class="card-title">${card.title}</h4>
        <h4 class="rating-text">Rating  <span class="badge badge-default">${card.rating}</span></h3>
        <p class="card-text">${card.plot}</p>
        <hr>
        <a href="#" id="${card.id}" class="btn btn-primary show-movie">Read more...</a>
      </div>
    </div>
    `
}

function makeFullCard(card){
  return `
    <div class="card">
      <img class="card-img-top" src="${card.image_url}" alt="${card.title} movie poster image">
      <div class="card-block">
        <h4 class="card-title">${card.title}</h4>
        <p class="card-text">${card.plot}</p>
        <p class="card-text">Release year: ${card.year}</p>
        <h3>Rating  <span class="badge badge-default">${card.rating}</span></h3>
        <hr>
      </div>
      <div class="update-row">
        <a href="#" id="${card.id}" class="btn btn-lg btn-primary edit-movie">Edit Movie Entry</a>
        <a href="#" id="${card.id}" class="btn btn-lg btn-warning delete-movie">Delete Movie Entry</a>
        <a href="#" id="${card.id}" class="btn btn-lg btn-success all-movies">Back to all movies</a>
      </div>
    </div>`
}
