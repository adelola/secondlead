class Review < ActiveRecord::Base

  include ActsAsReviewable::Review

  belongs_to :reviewable, :polymorphic => true
  belongs_to :reviewer, class_name: "User"


end