require "spec_helper"

describe Song do
  let(:aladdin) { Character.new('Aladdin', 'human', 'Scott Weinger', 'hero') }
  let(:jasmine) { Character.new('Jasmine', 'human', 'Linda Larkin', 'hero') }
  let(:genie) { Character.new('Genie', 'genie', 'Robin Williams', 'hero') }

  let(:a_whole_new_world) { Song.new('A Whole New World', [aladdin, jasmine]) }
  let(:friend_like_me) { Song.new('Friend Like Me', [genie]) }

  describe ".new" do
    it "takes a name and a character array as arguments" do
      expect(friend_like_me).to be_a(Song)
    end
  end
end
