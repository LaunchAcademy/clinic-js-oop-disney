class Movie {
  constructor(title, year, arrayOfCharacters, soundtrack) {
    this.title = title
    this.year = year
    this.characters = arrayOfCharacters
    this.soundtrack = soundtrack
    this.watchCount = 0
  }

  watch() {
    this.watchCount += 1
    // this.watchCount = this.watchCount + 1
  }

  addCharacter(newCharacter) {
    this.characters.push(newCharacter)
  }

  heroes() {
    let heroesString = ""

    this.characters.forEach((character) => {
      // determine if hero or villain
      if (character.isHero()) {
        heroesString += `${character.name}\n`
      }
    })
    return heroesString
  }

  villains() {
    let villainsString = ""

    this.characters.forEach((character) => {
      if (!character.isHero()) {
        villainsString += `${character.name}\n`
      }
    })

    return villainsString
  }

  cast() {
    let castString = ""

    this.characters.forEach((character) => {
      castString += `${character.actor}\n`
    })

    return castString
  }
}

export default Movie
