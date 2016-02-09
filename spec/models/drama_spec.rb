require 'rails_helper'

RSpec.describe Drama, type: :model do
  before(:all) do
    DatabaseCleaner.strategy = :transaction
  end

  before(:each) do
    DatabaseCleaner.start
  end

  after(:each) do
    DatabaseCleaner.clean
  end

  let!(:drama) { FactoryGirl.create(:drama, poster_file_name: 'not_a_real_poster.png') }
  let!(:rating_one) { FactoryGirl.create(:rating, drama: drama) }
  let!(:rating_two) { FactoryGirl.create(:rating, drama: drama, weight: 1) }

  it "fetches a drama" do
    expect(Drama.fetch.count).to eq(1)
  end

  it "returns array of its rating weights" do
    expect(drama.all_ratings).to eq([5, 1])
  end

  it "returns all_ratings size" do
    expect(drama.all_ratings_size).to eq(2)
  end
end
