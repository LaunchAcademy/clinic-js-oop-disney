class Character {
  constructor(name, species, actor, alignmentType) {
    this.name = name
    this.species = species
    this.actor = actor
    this.alignmentType = alignmentType
  }

  summary() {
    return `${this.name} (${this.species})`
  }

  isHero() {
    return this.alignmentType === 'hero'

    // debugger
    // if (this.alignmentType === 'hero') {
    //   return true
    // } else {
    //   return false
    // }

    // if (this.alignmentType === 'hero') {
    //   return true
    // }
    // return false
  }
}

export default Character
