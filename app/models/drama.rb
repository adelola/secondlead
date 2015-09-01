class Drama < ActiveRecord::Base
  has_many :drama_genres
  has_many :genres, through: :drama_genres
  has_many :drama_casts
  has_many :casts, through: :drama_casts

  has_attached_file :poster, styles: { medium: "300x300>", small: "200x200#", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :poster, content_type: /\Aimage\/.*\Z/

  attr_accessor :poster_remote_url

  def poster_remote_url=(url_value)
    self.poster = URI.parse(url_value).open unless url_value.blank?
    @poster_remote_url = url_value
  end
end
