require "spec_helper"

describe Soundtrack do
  let(:aladdin) { Character.new('Aladdin', 'human', 'Scott Weinger', 'hero') }
  let(:jasmine) { Character.new('Jasmine', 'human', 'Linda Larkin', 'hero') }
  let(:genie) { Character.new('Genie', 'genie', 'Robin Williams', 'hero') }

  let(:a_whole_new_world) { Song.new('A Whole New World', [aladdin, jasmine]) }
  let(:friend_like_me) { Song.new('Friend Like Me', [genie]) }
  let(:prince_ali) { Song.new('Prince Ali', [genie]) }

  let(:aladdin_soundtrack) { Soundtrack.new('Aladdin', [a_whole_new_world, friend_like_me])}

  describe ".new" do
    it "takes a name and a song array as arguments" do
      expect(aladdin_soundtrack).to be_a(Soundtrack)
    end
  end

  describe "#songs" do
    it "has a reader for 'songs'" do
      expect(aladdin_soundtrack.songs).to eq([a_whole_new_world, friend_like_me])
    end
  end

  describe "#add_song" do
    it "adds a song to the 'songs' array" do
      aladdin_soundtrack.add_song(prince_ali)

      expect(aladdin_soundtrack.songs.count).to eq(3)
      expect(aladdin_soundtrack.songs).to include(prince_ali)
    end
  end

  describe 'print_soundtrack' do
    it "prints out the soundtrack song listing" do
      expect(aladdin_soundtrack.print_soundtrack).to eq("A Whole New World\nFriend Like Me\n")
    end
  end
end
