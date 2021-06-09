import Song from "./Song"

class Soundtrack {
  constructor(name, songs){
    this.name = name
    this.songs = songs
  }

  addSong(songObject){
    this.songs.push(songObject)
  } 

  printSoundtrack(){
    let finalSoundtrackString = ""

    this.songs.forEach((songObject) => {
      finalSoundtrackString += `${songObject.name}\n`
    })

    return finalSoundtrackString
  }
}


export default Soundtrack