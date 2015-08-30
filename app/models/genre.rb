class Genre < ActiveRecord::Base
  has_many :drama_genres
end
