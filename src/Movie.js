class Movie {
  constructor(title, year, characters, soundtrack) {
    this.title = title;
    this.year = year;
    this.characters = characters;
    this.soundtrack = soundtrack;
    this.watchCount = 0;
  }

  watch() {
    this.watchCount++;
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  heroes() {
    let heroNames = "";
    this.characters.forEach((character) => {
      if (character.isHero()) {
        heroNames += `${character.name}\n`;
      }
    });
    return heroNames;
  }

  villains() {
    let villainNames = "";
    this.characters.forEach((character) => {
      if (!character.isHero()) {
        villainNames += `${character.name}\n`;
      }
    });
    return villainNames;
  }

  cast() {
    let actorNames = "";
    this.characters.forEach((character) => {
      actorNames += `${character.actor}\n`;
    });
    return actorNames;
  }
}

export default Movie;
