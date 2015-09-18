class User < ActiveRecord::Base
  has_secure_password
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_many :lists

  has_many :reviews, foreign_key: :reviewer_id
  has_many :reviewed_dramas,  through: :reviews, source: :drama


  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true, length: { maximum: 50 }, uniqueness: true
  validates :email, presence: true, uniqueness: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }
  validates :password, presence: true, length: { minimum: 6 }
 
  after_create :create_watch_list, :create_watching_list, :create_watched_list
  
  private

  def create_watch_list
  	List.create(name: 'Watch', description:'Queued Dramas', user_id: self.id)
  end

  def create_watching_list	
  	List.create(name: 'Watching', description:'Dramas in Progress', user_id: self.id)
  end

  def create_watched_list
  	List.create(name: 'Watched', description:'Dramas completed', user_id: self.id)
  end

end