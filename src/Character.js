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
    } else {
      return false 
    }

    //  return this.alignmentType === "hero"
    // this.alignmentType === "hero" ? true : false 
  }
}

export default Character