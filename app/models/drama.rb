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
  has_many :ratings
  has_many :raters, through: :ratings

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

  def self.fetch
    sample = Drama.where.not(poster_file_name: nil).limit(100)
  end

  def add_image_url
    self.image_url = self.poster.url
    self
  end

  def all_ratings
    self.ratings.map { |rating| rating.weight }
  end

  def all_ratings_size
    all_ratings.size
  end

  def average_rating
    all_ratings.compact.reduce(:+).to_f / all_ratings_size
  end

  def return_average_rating
    if all_ratings_size == 0
      return 0
    else
      average_rating.round(1)
    end
  end
end