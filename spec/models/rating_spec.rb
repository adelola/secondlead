require 'rails_helper'

RSpec.describe Rating, type: :model do
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
end
