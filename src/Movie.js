class Movie { 
  constructor(title, year, characters, soundtrack) {
    this.title = title 
    this.year = year
    this.characters = characters
    this.soundtrack = soundtrack
    // default property
    this.watchCount = 0
  }

  watch() {
    this.watchCount += 1
  }

  addCharacter(newCharacter) {
    this.characters.push(newCharacter)
  }

  heroes() {
    let heroesString = ""

    this.characters.forEach((character) => {
      if (character.isHero()) {
        heroesString += `${character.name}\n`
      }
    })
    
    return heroesString
  }

  villains() {
    let villainsString = ""

    this.characters.forEach((character) => {
      if (character.isHero() === false) {
        villainsString += `${character.name}\n`
      }
    })
    
    return villainsString
  }

  cast() {
    let castString = ""
    this.characters.forEach(characterObject => {
      castString += `${characterObject.actor}\n`
    })

    return castString
  }
}

export default Movie