class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references  :drama
      t.references  :reviewer     
      t.float       :rating
      t.text        :body

      t.timestamps
    end
  end
end
