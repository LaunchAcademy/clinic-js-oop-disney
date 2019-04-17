const Character = require("../Character.js")
const Song = require("../Song.js")
const Soundtrack = require("../Soundtrack.js")

describe("soundtrack class", () => {
  let genie
  let aladdin
  let jafar
  let aWholeNewWorld
  let friendLikeMe
  let princeAli
  let aladdinSoundtrack
  let songArray

  beforeEach(() => {
    genie = new Character('Genie', 'genie', 'Robin Williams', 'hero')
    aladdin = new Character('Aladdin', 'human', 'Scott Weinger', 'hero')
    jafar = new Character('Jafar', 'human', 'Jonathan Freeman', 'villain')

    aWholeNewWorld = new Song('A Whole New World', [aladdin, jasmine])
    friendLikeMe = new Song('Friend Like Me', [genie])
    princeAli = new Song('Aladdin', [genie])
    songArray = [aWholeNewWorld, friendLikeMe]

    aladdinSoundtrack = new Soundtrack('Aladdin', songArray)
  });

  it("defines a Soundtrack object", () => {
    expect(aladdinSoundtrack).toBeInstanceOf(Soundtrack)
  })

  it("has an initialized name property", () => {
    expect(aladdinSoundtrack.name).toBe('Aladdin')
  })

  it("has an initialized songs property", () => {
    expect(aladdinSoundtrack.songs).toBe(songArray)
  })

  describe("#addSong", () => {
    it("adds a song that increases song length by one", () => {
      aladdinSoundtrack.addSong(princeAli)

      expect(aladdinSoundtrack.songs.length).toBe(3)
    })

    it("adds a song to the 'songs' array", () => {
      aladdinSoundtrack.addSong(princeAli)

      expect(aladdinSoundtrack.songs).toContain(princeAli)
    })
  })

  describe.only("printSoundtrack", () => {
    it("prints out all of the songs in the soundtrack", () => {
      expect(aladdinSoundtrack.printSoundtrack()).toBe("A Whole New World\nFriend Like Me\n")
    })
  })
})
