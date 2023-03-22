class Soundtrack {
  constructor(name, songs) {
    this.name = name
    this.songs = songs
  }

  addSong(newSong) {
    this.songs.push(newSong)
  }

  printSoundtrack() {
    let finalString = ""
    this.songs.forEach((song) => {
      finalString += `${song.name}\n`
    })

    return finalString
  }
}

export default Soundtrack