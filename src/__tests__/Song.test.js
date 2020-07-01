import Character from '../Character.js'
import Song from '../Song.js'

describe('Song class', () => {
  let aladdin
  let genie
  let jasmine
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
  })

  it('defines a Song object', () => {
    expect(aWholeNewWorld).toBeInstanceOf(Song)
  })

  it('has a provided name property', () => {
    expect(aWholeNewWorld.name).toBe('A Whole New World')
  })

  it('has a provided character list array property', () => {
    expect(aWholeNewWorld.characterList).toBe(characterArray)
  })
})
