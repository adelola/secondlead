class Rating < ActiveRecord::Base
  belongs_to :drama
  belongs_to :rater, class_name: "User"

  validates :weight, numericality: { only_integer: true, less_than_or_equal_to: 5 }

  def review
    Review.find_by({drama: self.drama, reviewer: self.rater})
  end

  def update_review
    review.update(rating_id: self.id) if review && review.rating_id.nil?
  end
end