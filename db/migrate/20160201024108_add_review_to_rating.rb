class AddReviewToRating < ActiveRecord::Migration
  def change
    add_reference :reviews, :rating, index: true, foreign_key: true
  end
end
