class Soundtrack {
  constructor(name, providedSongs) {
    this.name = name
    this.songs = providedSongs
  }

  addSong(song) {
    this.songs.push(song)
  }

  printSoundtrack() {
    let output = ``

    // iterate over the array and add to it
    this.songs.forEach(song => {
      output += `${song.name}\n`
      // output += song.name + "\n"
    })

    return output
  }
}

export default Soundtrack