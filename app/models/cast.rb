class Cast < ActiveRecord::Base
  searchkick

  has_many :drama_casts
  has_many :dramas, through: :drama_casts
end
