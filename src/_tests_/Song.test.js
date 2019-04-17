const Song = require("../Song.test.js")

describe("song class", () => {
  let alladin
  let genie
  let jafar
  let aWholeNewWorld
  let friendLikeMe
  let characterArray

  beforeEach(() => {
    alladin = new Character('Aladdin', 'human', 'Scott Weinger', 'hero')
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

  it("has an the correct character list array", () => {
    expect(aWholeNewWorld.characterList).toBe(characterArray)
  })
})
