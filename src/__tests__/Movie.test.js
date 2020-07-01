import Movie from '../Movie.js'
import Character from '../Character.js'
import Song from '../Song.js'
import Soundtrack from '../Soundtrack.js'

describe('Movie class', () => {
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
    characterArray = [aladdin, jasmine, jafar]

    aWholeNewWorld = new Song('A Whole New World', [aladdin, jasmine])
    friendLikeMe = new Song('Friend Like Me', [genie])
    songArray = [aWholeNewWorld, friendLikeMe]

    aladdinSoundtrack = new Soundtrack('Aladdin', songArray)
    aladdinMovie = new Movie('Aladdin', 1992, characterArray, aladdinSoundtrack)
  })

  it('defines movie', () => {
    expect(aladdinMovie).toBeInstanceOf(Movie)
  })

  it('has an initialized title property', () => {
    expect(aladdinMovie.title).toBe('Aladdin')
  })

  it('has an initialized year property', () => {
    expect(aladdinMovie.year).toBe(1992)
  })

  it('has an initialized characterArray property', () => {
    expect(aladdinMovie.characterArray).toBe(characterArray)
  })

  it('has an initialized soundtrack property', () => {
    expect(aladdinMovie.soundtrack).toBe(aladdinSoundtrack)
  })

  it('initializes with a watchCount of 0', () => {
    expect(aladdinMovie.watchCount).toBe(0)
  })

  describe('#watch', () => {
    it('increases the watchCount by 2 when we call #watch two times', () => {
      aladdinMovie.watch()
      aladdinMovie.watch()

      expect(aladdinMovie.watchCount).toBe(2)
    })
  })

  describe('#addCharacter', () => {
    it('adds an additional element to the characters array', () => {
      aladdinMovie.addCharacter(genie)

      expect(aladdinMovie.characters.length).toBe(4)
    })

    it('should include the character passed in as an argument', () => {
      aladdinMovie.addCharacter(genie)

      expect(aladdinMovie.characters).toContain(genie)
    })
  })

  describe('#heroes', () => {
    it('prints out a list of the heroes', () => {
      expect(aladdinMovie.heroes()).toBe('Aladdin\nJasmine\n')
    })
  })

  describe('#villains', () => {
    it('prints out a list of the villians', () => {
      expect(aladdinMovie.villains()).toBe('Jafar\n')
    })
  })

  describe('#cast', () => {
    it('prints out the cast', () => {
      expect(aladdinMovie.cast()).toBe(
        'Scott Weinger\nLinda Larkin\nJonathan Freeman\n'
      )
    })
  })
})
