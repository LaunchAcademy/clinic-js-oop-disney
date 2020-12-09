import Character from '../Character.js'
import Song from '../Song.js'
import Soundtrack from '../Soundtrack.js'

describe('Soundtrack class', () => {
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
  })

  it('defines a Soundtrack object', () => {
    expect(aladdinSoundtrack).toBeInstanceOf(Soundtrack)
  })

  it('has a provided name property', () => {
    expect(aladdinSoundtrack.name).toBe('Aladdin')
  })

  it('has a provided songs array property', () => {
    expect(aladdinSoundtrack.songs).toBe(songArray)
  })

  describe('#addSong', () => {
    it('adds a song that increases songs length by one', () => {
      expect(aladdinSoundtrack.songs.length).toBe(2)
      
      aladdinSoundtrack.addSong(princeAli)
     
      expect(aladdinSoundtrack.songs.length).toBe(3)
    })
  })

  describe('#printSoundtrack', () => {
    it('prints out the soundtrack song listing', () => {
      expect(aladdinSoundtrack.printSoundtrack()).toBe(
        'A Whole New World\nFriend Like Me\n'
      )
    })
  })
})