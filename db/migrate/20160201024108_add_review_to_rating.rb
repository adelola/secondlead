class AddReviewToRating < ActiveRecord::Migration
  def change
    add_reference :reviews, :rating, index: true, foreign_key: true
    add_column :reviews, :rating_weight, :string
  end
end
