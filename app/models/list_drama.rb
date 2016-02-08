class ListDrama < ActiveRecord::Base
  include PublicActivity::Model
  tracked

  belongs_to :drama
  belongs_to :list
end