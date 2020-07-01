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

  addCharacter(newCharacter) {
    this.characters.push(newCharacter)
  }

  heroes() {
    let output = ''
    this.characters.forEach((character) => {
      if (character.isHero()) {
        output += `${character.name}\n`
      }
    })
    return output
  }

  villains() {
    let output = ''
    this.characters.forEach((character) => {
      if (!character.isHero()) {
        output += `${character.name}\n`
      }
    })
    return output
  }

  cast() {
    let output = ''
    this.characters.forEach((character) => {
      output += `${character.actor}\n`
    })
    return output
  }
}

export default Movie
