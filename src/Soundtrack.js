class Soundtrack {
  constructor(name, songs) {
    this.name = name
    this.songs = songs
  }

  addSong(newSong) {
    this.songs.push(newSong)
  }

  printSoundtrack() {
    // console.log(this.songs);
    let printString = ""
    this.songs.forEach((song) => {
      printString += song.name 
      printString += "\n"
    })
    return printString

    // let print = []
    // this.songs.forEach((song) => {
    //   print.push(song.name)
    // })
    // console.log(print.join("\n"));
    // return print.join("\n")
    // ^^ "works", but needs an additional \n at the end for formatting!
  }
}

export default Soundtrack