class CreateDramaGenres < ActiveRecord::Migration
  def change
    create_table :drama_genres do |t|
      t.belongs_to :drama
      t.belongs_to :genre

      t.timestamps null: false
    end
  end
end
