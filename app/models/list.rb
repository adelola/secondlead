class List < ActiveRecord::Base
  searchkick

  include PublicActivity::Model
  tracked

  def search_data
    as_json only: [:name, :description]
  end

  belongs_to :user
  has_many :list_dramas
  has_many :dramas, through: :list_dramas

  validates :name, presence: true
end