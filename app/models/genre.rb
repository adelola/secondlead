class Genre < ActiveRecord::Base
  searchkick

  def search_data
    as_json only: [:name]
  end

  has_many :drama_genres
  has_many :dramas, through: :drama_genres
end
