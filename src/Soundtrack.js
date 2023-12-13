class Soundtrack { 
  constructor(name, songsArray) {
    this.name = name 
    this.songs = songsArray
  }

  addSong(songObject) {
    this.songs.push(songObject)
  }

  printSoundtrack() {
    let soundtrackString = ""
    // iterate over this.songs
    this.songs.forEach(song => {
      soundtrackString += `${song.name}\n`
    })
      // and add each song name to a string with a \n 
    // return the final string with all the songs

    return soundtrackString
  }
}

export default Soundtrack