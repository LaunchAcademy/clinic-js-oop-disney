require "spec_helper"

describe Movie do
  let(:aladdin) { Character.new('Aladdin', 'human', 'Scott Weinger', 'hero') }
  let(:genie) { Character.new('Genie', 'genie', 'Robin Williams', 'hero') }
  let(:jafar) { Character.new('Jafar', 'human', 'Jonathan Freeman', 'villain') }
  let(:jasmine) { Character.new('Jasmine', 'human', 'Linda Larkin', 'hero') }

  let(:a_whole_new_world) { Song.new('A Whole New World', [aladdin, jasmine]) }
  let(:friend_like_me) { Song.new('Friend Like Me', [genie]) }

  let(:aladdin_soundtrack) { Soundtrack.new('Aladdin', [a_whole_new_world, friend_like_me])}

  let(:aladdin_movie) { Movie.new('Aladdin', 1992, [aladdin, jasmine, jafar], aladdin_soundtrack) }

  describe ".new" do
    it "takes a name, year, character array, and soundtrack as arguments" do
      expect(aladdin_movie).to be_a(Movie)
    end

    it "initializes with a watch_count of 0" do
      expect(aladdin_movie.watch_count).to eq(0)
    end
  end

  describe "#watch_count" do
    it "has a reader" do
      expect(aladdin_movie.watch_count).to eq(0)
    end

    it "does not have a writer" do
      expect { aladdin_movie.watch_count = 5 }.to raise_error(NoMethodError)
    end
  end

  describe "#watch!" do
    it "increases the watch_count by 2 when we call #watch! two times" do
      aladdin_movie.watch!
      aladdin_movie.watch!

      expect(aladdin_movie.watch_count).to eq(2)
    end
  end

  describe "#characters" do
    it "has a reader for 'characters'" do
      expect(aladdin_movie.characters).to eq([aladdin, jasmine, jafar])
    end
  end

  describe "#add_character" do
    it "adds a character to the 'characters' array" do
      aladdin_movie.add_character(genie)

      expect(aladdin_movie.characters.count).to eq(4)
      expect(aladdin_movie.characters).to include(genie)
    end
  end

  describe "#heroes" do
    it "prints out a list of the heroes" do
      expect(aladdin_movie.heroes).to eq("Aladdin\nJasmine\n")
    end
  end

  describe "#villains" do
    it "prints out a list of the villains" do
      expect(aladdin_movie.villains).to eq("Jafar\n")
    end
  end

  describe '#cast' do
    it "prints out the cast" do
      expect(aladdin_movie.cast).to eq("Scott Weinger\nLinda Larkin\nJonathan Freeman\n")
    end
  end
end
