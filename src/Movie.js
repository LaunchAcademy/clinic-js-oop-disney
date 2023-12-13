class Movie { 
  constructor(title, year, characters, soundtrack) {
    this.title = title 
    this.year = year
    this.character = characters
    this.soundtrack = soundtrack
    // default property
    this.watchCount = 0
  }
}

export default Movie