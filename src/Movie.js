class Movie {
  constructor(title, year, characters, soundtrack) {
    this.title = title 
    this.year = year 
    this.characters = characters 
    this.soundtrack = soundtrack 
    this.watchCount = 0
  }

  watch() {
    this.watchCount += 1
  }

  addCharacter(characterObject) {
    this.characters.push(characterObject)
  }

  heroes(){
    let heroesString = ""

    this.characters.forEach(character => {
      if (character.isHero()) {
        heroesString += `${character.name}\n`
      }
    })

    return heroesString
  }

   villains(){
    let villainsString = ""

    this.characters.forEach(character => {
      if (character.isHero() !== true) {
        villainsString += `${character.name}\n`
      }
    })

    return villainsString
  }

  cast() {
    let castString = ""

    this.characters.forEach(character => {
      castString += `${character.actor}\n`
    })

    return castString
  }
}

export default Movie
// title, year, characters, soundtrack, watchCount
// aladdinMovie = new Movie('Aladdin', 1992, characterArray, aladdinSoundtrack)
