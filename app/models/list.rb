class List < ActiveRecord::Base

  validates :name, presence: true
end