class Drama < ActiveRecord::Base
  searchkick

  def search_data
    as_json only: [:name, :non_english_name, :plot]
  end

  has_many :drama_genres
  has_many :genres, through: :drama_genres
  has_many :drama_casts
  has_many :casts, through: :drama_casts

  has_many :reviews
  has_many :reviewers, through: :reviews

  has_attached_file :poster, styles: { medium: "400x400>", small: "200x200#", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :poster, content_type: /\Aimage\/.*\Z/

  attr_accessor :poster_remote_url

  def poster_remote_url=(url_value)
    self.poster = URI.parse(url_value).open unless url_value.blank?
    @poster_remote_url = url_value
  end

  def add_to_list(list)
    ListDrama.new(drama: self, list: list)
  end

  def add_image_url
    self.image_url = self.poster.url
    self
  end

  def self.fetch
    sample = Drama.where.not(poster_file_name: nil).limit(50)
    sample_with_images = sample.map do |x| 
      x.add_image_url
    end
    sample_with_images
  end

  def avg_rating
    all_ratings = self.reviews.map do |x|
      x.rating
    end 
    all_ratings = all_ratings.compact
    all_ratings.reduce(:+).to_f / all_ratings.size

  end
  
end