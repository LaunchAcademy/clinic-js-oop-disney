class Soundtrack {
  constructor(name, songs) {
    this.name = name
    this.songs = songs
  }

  addSong(newSong) {
    this.songs.push(newSong)
  }

  printSoundtrack() {
    let songListing = ""
    this.songs.forEach(song => {
      songListing += song.name + `\n`
      // songListing += `${song.name}\n`
    })
    return songListing
  }
}

export default Soundtrack