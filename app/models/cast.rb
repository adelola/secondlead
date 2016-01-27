class Cast < ActiveRecord::Base
  searchkick

  def search_data
    as_json only: [:name]
  end

  has_many :drama_casts
  has_many :dramas, through: :drama_casts

  has_attached_file :picture, styles: { medium: "400x400>", small: "200x200>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/
end