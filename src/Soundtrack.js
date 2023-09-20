class Soundtrack {
  constructor(name, arrayOfSongs) {
    this.name = name
    this.songs = arrayOfSongs
  }

  addSong(newSong) {
    this.songs.push(newSong)
  }

  printSoundtrack() {
    let finalString = ""

    this.songs.forEach((song) => {
      // console.log(song.name)
      finalString += `${song.name}\n`
    })

    return finalString
  }
}
export default Soundtrack
