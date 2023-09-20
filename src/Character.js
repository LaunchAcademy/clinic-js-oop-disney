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
    if (this.alignmentType === "hero") {
      return true
    }

    if (this.alignmentType === "villain") {
      return false
    }

    // return this.alignmentType === "hero"

    // return this.alignmentType !== "villain"

    // if (this.alignmentType === "hero") {
    //   return true
    // }
    // return false
  }
}

export default Character
