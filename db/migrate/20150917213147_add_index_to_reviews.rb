class AddIndexToReviews < ActiveRecord::Migration
  def change  	
    add_index :reviews, :reviewer_id
    add_index :reviews, :drama_id
  end
end
