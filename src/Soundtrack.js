class Soundtrack {
  constructor(name,songs){
    this.name = name
    this.songs = songs
  }

  addSong(song){
    this.songs.push(song)
  }

  printSoundtrack(){
    let songList = ""
    this.songs.forEach(song => {
      songList += `${song.name}\n`
    })
    return songList
  }
}

module.exports = Soundtrack
