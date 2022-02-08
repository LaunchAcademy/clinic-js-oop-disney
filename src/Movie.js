class Movie {
  constructor(title, year, characters, soundtrack) {
    this.title = title
    this.year = year
    this.characters = characters
    this.soundtrack = soundtrack
    this.watchCount = 0
  }
  watch() {
    this.watchCount++
  }
  addCharacter(character) {
    this.characters.push(character)
  }
  heroes() {
    let result = ""
    this.characters.forEach((character) => {
      if (character.isHero()) {
        result += `${character.name}\n`
      }
    })
    return result
  }
  villains() {
    let result = ""
    this.characters.forEach((character) => {
      if (!character.isHero()) {
        result += `${character.name}\n`
      }
    })
    return result
  }
  cast() {
    let result = ""
    this.characters.forEach((character) => {
      result += `${character.actor}\n`
    })
    return result
  }
}
export default Movie
