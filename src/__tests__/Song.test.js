const Character = require("../Character.js")
const Song = require("../Song.js")

describe("song class", () => {
  let aladdin
  let genie
  let jafar
  let aWholeNewWorld
  let friendLikeMe
  let characterArray

  beforeEach(() => {
    aladdin = new Character('Aladdin', 'human', 'Scott Weinger', 'hero')
    genie = new Character('Genie', 'genie', 'Robin Williams', 'hero')
    jasmine = new Character('Jasmine', 'human', 'Linda Larkin', 'hero')
    characterArray = [aladdin, jasmine]

    aWholeNewWorld = new Song('A Whole New World', characterArray)
    friendLikeMe = new Song('Friend Like Me', [genie])
  });

  it("defines a Song object", () => {
    expect(aWholeNewWorld).toBeInstanceOf(Song)
  })

  it("has an initialized name property", () => {
    expect(aWholeNewWorld.name).toBe('A Whole New World')
  })

  it("has the correct character list array", () => {
    expect(aWholeNewWorld.characterList).toBe(characterArray)
  })
})
