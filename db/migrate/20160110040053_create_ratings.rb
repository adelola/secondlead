class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :weight
      t.references  :drama
      t.references  :rater 
    end
  end
end
