class Cast < ActiveRecord::Base
  searchkick

  def search_data
    as_json only: [:name]
  end

  has_many :drama_casts
  has_many :dramas, through: :drama_casts

  def add_image_url
    self.image_url = self.picture.url
    self
  end
end
