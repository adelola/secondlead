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

  it "adds itself to list" do
    @drama = FactoryGirl.build(:drama, name: "test")
    @list = FactoryGirl.build(:list, name: "test")
    @drama.add_to_list
    expect(@list).to include(@drama)
  end
end
