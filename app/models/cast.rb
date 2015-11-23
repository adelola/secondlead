class Cast < ActiveRecord::Base
  searchkick

  def search_data
    as_json only: [:name]
  end

  has_many :drama_casts
  has_many :dramas, through: :drama_casts
end
