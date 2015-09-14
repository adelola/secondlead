class List < ActiveRecord::Base
  belongs_to :user
  has_many :list_dramas
  has_many :dramas, through: :list_dramas


  validates :name, presence: true
end