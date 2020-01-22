class Movie {
  constructor(title){
    this.title = title
    this.watchCount = 0
  }

  watch(){
    this.watchCount ++
  }
}

module.exports = Movie
