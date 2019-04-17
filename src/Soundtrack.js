class Soundtrack {
  constructor(name, songs){
    this.name = name
    this.songs = songs
  }

  addSong(newSong){
    this.songs.push(newSong)
  }

  printSoundtrack(){
    let songString = ""

    this.songs.forEach((song) => {
      songString += `${song.name}\n`
    })

    return songString
  }
}

module.exports = Soundtrack
