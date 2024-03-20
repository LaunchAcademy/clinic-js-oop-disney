class Soundtrack {
  constructor(name, songsArray) {
    this.name = name 
    this.songs = songsArray
  }

  addSong(songObject) {
    return this.songs.push(songObject)
  }


  printSoundtrack() {
    let soundTrackListString = ""

    this.songs.forEach(song => {
      soundTrackListString += `${song.name}\n`
    })
    
    return soundTrackListString
  }
}

export default Soundtrack 