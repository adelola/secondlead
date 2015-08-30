class DramaCast < ActiveRecord::Base
  belongs_to :cast
  belongs_to :drama
end
