import Movie from './src/Movie.js'
import Character from './src/Character.js'
import Song from './src/Song.js'
import Soundtrack from './src/Soundtrack.js'

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

debugger
