const renderForms = {
  newMovieForm(){
    let container = document.querySelector('.card-deck')
    container.innerHTML = form()
    activate.home()
    activate.new()
  },
  updateMovie(data){
    let container = document.querySelector('.card-deck')
    container.innerHTML = form(data.id)
    document.querySelector('#movie-title').value = data.title
    document.querySelector('#movie-plot').value = data.plot
    document.querySelector('#movie-year').value = data.year
    document.querySelector('#movie-image-url').value = data.image_url
    document.querySelector('#movie-rating').value = data.rating
  }
}

const collectFormData = () => {
  let data = {}
  data.title = document.querySelector('#movie-title').value
  data.plot = document.querySelector('#movie-plot').value
  data.year = document.querySelector('#movie-year').value
  data.image_url = document.querySelector('#movie-image-url').value
  data.rating = document.querySelector('#movie-rating').value
  let validatedData = validateFormData(data)
  if(validatedData.error) {
    formErrorMessage(validatedData)
  } else {
    document.querySelector('.dialogue').innerHTML = ''
    return validatedData
  }
}

const validateFormData = (data) => {
  let errorMessage = ''
  if(!data.title) errorMessage += '\n Your movie must have a title! '
  if(!data.plot) errorMessage += '\n You movie must have a plot! '
  if(!data.year) errorMessage += '\n You must enter a valid release year '
  if(typeof Number(data.year) !== 'number') {
    errorMessage += '\n You must enter a valid release year '
  }
  if(!data.image_url) data.image_url = 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS8wOTEvb3JpZ2luYWwvanVseS1za3l3YXRjaGluZy1wb3J0bGFuZC5qcGc='
  errorMessage !== '' ? data.error = errorMessage : null
  return data
}

const formErrorMessage = (data) => {
  document.querySelector('.dialogue').innerHTML =
  `<h3>Your form seems to be missing some information. ${data.error}</h3>`
}
