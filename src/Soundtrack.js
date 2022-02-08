class Soundtrack {
  constructor(name, songs) {
    this.name = name
    this.songs = songs
  }
  addSong(song) {
    this.songs.push(song)
  }
  printSoundtrack() {
    let result = ""
    this.songs.forEach((song) => {
      result += `${song.name}\n`
    })
    return result
  }
}
export default Soundtrack
