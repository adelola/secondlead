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

  let!(:drama_one) { FactoryGirl.create(:drama, poster_file_name: 'not_a_real_poster.png') }
  let!(:drama_two) { FactoryGirl.create(:drama) }
  let!(:rating_one) { FactoryGirl.create(:rating, drama: drama_one) }
  let!(:rating_two) { FactoryGirl.create(:rating, drama: drama_one, weight: 1) }

  it "fetches a drama" do
    expect(Drama.fetch.count).to eq(1)
  end

  it "returns array of its rating weights" do
    expect(drama_one.all_ratings).to eq([5, 1])
  end

  it "returns all_ratings size" do
    expect(drama_one.all_ratings_size).to eq(2)
  end

  it "calculates average_rating" do
    expect(drama_one.average_rating).to eq(3.0)
  end

  it "returns 0 if no ratings" do
    expect(drama_two.return_average_rating).to eq(0)
  end

  it "returns rounded average if more than 1 rating" do
    expect(drama_one.return_average_rating).to eq(3.0)
  end
end
