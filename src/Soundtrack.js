class Soundtrack {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  }

  addSong(song) {
    this.songs.push(song);
  }

  printSoundtrack() {
    let songOutput = "";
    this.songs.forEach((song) => {
      songOutput += `${song.name}\n`;
    });
    return songOutput;
  }
}

export default Soundtrack;
