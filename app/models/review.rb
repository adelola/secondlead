class Review < ActiveRecord::Base
  include ActsAsReviewable::Review
  tracked

  belongs_to :drama
  belongs_to :reviewer, class_name: "User"
end