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

  let!(:user) { FactoryGirl.create(:user) }
  let!(:drama) { FactoryGirl.create(:drama) }
  let!(:review) { FactoryGirl.create(:review, drama: drama, reviewer: user) }
  let!(:rating) { FactoryGirl.create(:rating, drama: drama, rater: user) }

  it "finds review" do
    expect(rating.review).to eq(review)
  end

  # not currently working
  # it "updates the review with new rating" do
  #   rating.update(weight: 1)
  #   rating.update_review
  #   expect(review.rating_weight).to eq(1)
  # end
end
