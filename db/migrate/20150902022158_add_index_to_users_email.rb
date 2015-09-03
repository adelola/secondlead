class AddIndexToUsersEmail < ActiveRecord::Migration
  def change
  	add_index :users, [:username, :email], unique: true
  	add_index :users, :email
  end
end
