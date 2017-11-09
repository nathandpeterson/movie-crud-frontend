
function form(){
  return `
    <form>
      <label for="movie-title">title</label>
      <input type="text" id="movie-title" class="form-control">
      </input>
      <label for="movie-plot">plot</label>
      <input type="text" id="movie-plot" class="form-control">
      <label for="movie-year">year released</label>
      <input type="text" id="movie-year" class="form-control">
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
      <div class="update-row">
        <a href="#" data="" class="btn btn-lg btn-warning all-movies">Go back to all movies</a>
        <button type="button" class="btn btn-lg btn-primary create-movie">Submit</button>
      </div>
    </form>`
}
