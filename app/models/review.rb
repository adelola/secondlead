class Review < ActiveRecord::Base
  include ActsAsReviewable::Review

  belongs_to :drama
  belongs_to :reviewer, class_name: "User"

  def rating
    Rating.find_by({drama: self.drama, rater: self.reviewer})
  end

  def update_with_rating
    self.update(rating_id: rating.id, rating_weight: rating.weight) if self.rating_id.nil? && !rating.nil?
  end
end