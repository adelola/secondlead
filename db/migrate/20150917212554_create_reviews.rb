class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references  :reviewable,    :polymorphic => true
      t.references  :reviewer,      :polymorphic => true
      t.float       :rating
      t.text        :comment

      t.timestamps
    end
  end
end
