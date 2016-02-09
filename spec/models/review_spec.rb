require 'rails_helper'

RSpec.describe Review, type: :model do
  before(:all) do
    DatabaseCleaner.strategy = :transaction
  end

  before(:each) do
    DatabaseCleaner.start
  end

  after(:each) do
    DatabaseCleaner.clean
  end

  let!(:user) { FactoryGirl.create(:user) }
  let!(:drama) { FactoryGirl.create(:drama) }
  let!(:review) { FactoryGirl.create(:review, drama: drama, reviewer: user) }
  let!(:rating) { FactoryGirl.create(:rating, drama: drama, rater: user) }

  it "finds rating" do
    expect(review.rating).to eq(rating)
  end

  it "has no rating weight" do
    expect(review.rating_weight).to eq(nil)
  end

  it "updates the review with new rating" do
    review.update_with_rating
    expect(review.rating_weight).to eq(5)
  end
end
