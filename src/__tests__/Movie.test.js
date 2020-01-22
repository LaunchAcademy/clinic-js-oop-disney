const Movie = require("../Movie.js")
const Character = require("../Character.js")
const Song = require("../Song.js")
const Soundtrack = require("../Soundtrack.js")


describe("Character class", () => {
  let aladdin
  let genie
  let jafar
  let jasmine
  let characterArray
  let aWholeNewWorld
  let friendLikeMe
  let songArray
  let aladdinSoundtrack
  let aladdinMovie

  beforeEach(() => {
    aladdin = new Character('Aladdin', 'human', 'Scott Weinger', 'hero')
    genie = new Character('Genie', 'genie', 'Robin Williams', 'hero')
    jafar = new Character('Jafar', 'human', 'Jonathan Freeman', 'villain')
    jasmine = new Character('Jasmine', 'human', 'Linda Larkin', 'hero')
    characterArray = [aladdin, jafar, jasmine]

    aWholeNewWorld = new Song('A Whole New World', [aladdin, jasmine])
    friendLikeMe = new Song('Friend Like Me', [genie])
    songArray = [aWholeNewWorld, friendLikeMe]

    aladdinSoundtrack = new Soundtrack('Aladdin', songArray)
    aladdinMovie = new Movie('Aladdin', 1992, characterArray, aladdinSoundtrack)
  });

  it("defines movie", () => {
    expect(aladdinMovie).toBeInstanceOf(Movie)
  })

  it("has an initialized title property", () => {
    expect(aladdinMovie.title).toBe("Aladdin")
  })

  it("initializes with a watch_count of 0", () => {
    expect(aladdinMovie.watchCount).toBe(0)
  })

  describe("#watch", () => {
    it("increases the watch_count by 2 when we call #watch! two times", () => {
      aladdinMovie.watch()
      aladdinMovie.watch()

      expect(aladdinMovie.watchCount).toBe(2)
    })
  })

  describe("#addCharacter", () => {
    it.only("adds an additional element to the characters array", () => {
      aladdinMovie.addCharacter(genie)

      expect(aladdinMovie.characters.length).toBe(4)
    })

    it("should include the character passed in as an argument", () => {
      aladdinMovie.addCharacter(genie)

      expect(aladdinMovie.characters).toContain(genie)
    })
  })

  describe("#heroes", () => {
    it("prints out a list of the heroes", () => {
      expect(aladdinMovie.heroes()).toBe("Aladdin\nJasmine\n")
    })
  })

  describe("#villians", () => {
    it("prints out a list of the villians", () => {
      expect(aladdinMovie.villians()).toBe("Jafar\n")
    })
  })

  describe("#cast", () => {
    it("prints out the cast", () => {
      expect(aladdinMovie.cast()).toBe("Scott Weinger\nLinda Larkin\nJonathan Freeman\n")
    })
  })
})
