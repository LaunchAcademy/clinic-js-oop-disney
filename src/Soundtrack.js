class Soundtrack {
  constructor(name, songs) {
    this.name = name
    // this is an array
    this.songs = songs
    // this.songs = []
  }

  addSong(song) {
    this.songs.push(song)
  }

  printSoundtrack() {
    // set up a string
    let songList = ""
    // go through the `this.songs` array
    this.songs.forEach(song => {
      songList += `${song.name}\n`
      // for each song, add the name of the song to our string

    })
    // return the string
    return songList
  }
}

export default Soundtrack