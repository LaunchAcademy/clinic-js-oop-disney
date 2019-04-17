const Character = require("../Character.js")

describe("Character class", () => {
  let genie
  let aladdin
  let jafar

  beforeEach(() => {
    genie = new Character('Genie', 'genie', 'Robin Williams', 'hero')
    aladdin = new Character('Aladdin', 'human', 'Scott Weinger', 'hero')
    jafar = new Character('Jafar', 'human', 'Jonathan Freeman', 'villain')
  });

  it("defines a character object", () => {
    expect(genie).toBeInstanceOf(Character)
  })

  it("has an initialized title property", () => {
    expect(genie.name).toBe("Genie")
  })

  it("has an initialized actor property", () => {
    expect(genie.actor).toBe("Robin Williams")
  })

  it("has an initialized species property", () => {
    expect(genie.species).toBe("genie")
  })

  it("has an initialized aslignmentType property", () => {
    expect(genie.alisgnmentType).toBe("hero")
  })

  describe("#summary", () => {
    it("returns a string of the character name and species", () => {
      expect(aladdin.summary()).toBe("Aladdin (human)")
    })
  })

  describe("#hero", () => {
    it("returns a string of the character name and species", () => {
      expect(aladdin.hero()).toBe(true)
    })

    it("returns a string of the character name and species", () => {
      expect(jafar.hero()).toBe(false)
    })
  })
})
