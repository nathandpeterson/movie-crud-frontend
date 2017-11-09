
const crud = {
  destroy(id){
    request.destroy(id)
      .then(response => console.log(response))
  },
  createMovie(){
    request.create(response => console.log(response))
  }
}
