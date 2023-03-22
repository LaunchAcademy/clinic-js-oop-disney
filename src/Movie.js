class Movie {
  constructor(title, year, characters, soundtrack) {
    this.title = title
    this.year = year
    this.characters = characters
    this.soundtrack = soundtrack
    this.watchCount = 0
  }

  watch() {
    this.watchCount ++
    // this.watchCount += 1
  }

  addCharacter(newCharacter) {
    this.characters.push(newCharacter)
  }

  heroes() {
    let finalString = ""

    this.characters.forEach((character) => {
      // debugger
      if (character.isHero()) {
        finalString += `${character.name}\n`
      }
    })

    return finalString
  }

  villains() {
    let finalString = ""

    this.characters.forEach((character) => {
      // if (character.isHero() === false) {
      if (!character.isHero()) {
        finalString += `${character.name}\n`
      }
    })

    return finalString
  }

  cast() {
    let finalString = ""
    
    this.characters.forEach((character) => {
      finalString += `${character.actor}\n`
    })

    return finalString
  }
}

export default Movie