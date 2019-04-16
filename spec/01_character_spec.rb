require "spec_helper"

describe Character do
  let(:genie) { Character.new('Genie', 'genie', 'Robin Williams', 'hero') }
  let(:aladdin) { Character.new('Aladdin', 'human', 'Scott Weinger', 'hero') }
  let(:jafar) { Character.new('Jafar', 'human', 'Jonathan Freeman', 'villain') }

  describe ".new" do
    it "takes a name, species, actor, and type as arguments" do
      expect(genie).to be_a(Character)
    end
  end

  describe "#summary" do
    it "returns a string of the character name and species" do
      expect(aladdin.summary).to eq("Aladdin (human)")
    end
  end

  describe "#name" do
    it "has a reader for name" do
      expect(genie.name).to eq("Genie")
    end
  end

  describe "#actor" do
    it "has a reader for actor" do
      expect(genie.actor).to eq("Robin Williams")
    end

    it "does not have a writer for actor" do
        expect { genie.actor = "Brad Pitt" }.to raise_error(NoMethodError)
    end
  end

  describe "#hero?" do
    it "returns 'true' for a hero" do
      expect(aladdin.hero?).to eq(true)
    end

    it "returns 'false' for a villain" do
      expect(jafar.hero?).to eq(false)
    end
  end
end
