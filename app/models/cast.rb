class Cast < ActiveRecord::Base
  has_many :drama_casts
  has_many :dramas, through: :drama_casts

  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
end
