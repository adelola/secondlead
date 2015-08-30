class Cast < ActiveRecord::Base
  has_many :drama_casts
  has_many :dramas, through: :drama_casts
end
