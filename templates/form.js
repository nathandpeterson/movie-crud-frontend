
function form(id){
  return `
    <form>
      <label for="movie-title">title</label>
      <input required type="text" id="movie-title" class="form-control">
      </input>
      <label for="movie-plot">plot</label>
      <input required type="text" id="movie-plot" class="form-control">
      <label for="movie-year">year released</label>
      <input required type="integer" id="movie-year" class="form-control">
      <label for="movie-image">image url</label>
      <input type="text" id="movie-image-url" class="form-control">
      <label for="movie-rating">rating</label>
      <select id="movie-rating" class="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <br>
      <div class="container">
        <div class="update-row">
          <button type="button" class="btn btn-lg btn-warning all-movies">Go Back</button>
          <button id="${id}" type="button" class="btn btn-lg btn-primary submit-movie"> Submit </button>
        </div>
      </div>
    </form>
    `
}
