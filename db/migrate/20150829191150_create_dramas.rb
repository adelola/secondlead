class CreateDramas < ActiveRecord::Migration
  def change
    create_table :dramas do |t|
      t.string  :name
      t.string  :non_english_namr
      t.text    :plot
      t.integer :episode_count
      t.string  :release_date
      t.string  :url
      t.string  :language
      t.string  :image_url

      t.timestamps null: false
    end
  end
end
