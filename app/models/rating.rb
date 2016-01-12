class Rating < ActiveRecord::Base

  belongs_to :drama
  belongs_to :rater, class_name: "User" 

  validates :weight, numericality: { only_integer: true, less_than_or_equal_to: 5 }
  
end