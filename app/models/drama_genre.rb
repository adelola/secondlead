class DramaGenre < ActiveRecord::Base
  belongs_to :drama
  belongs_to :genre
end
