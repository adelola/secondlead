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

  it "fetches drama" do
    expect(Drama.fetch.count).to eq(1)
  end
end
