class CreateDramas < ActiveRecord::Migration
  def change
    create_table :dramas do |t|
      t.string :name
      t.string :non_english_name
      t.text   :plot
      t.string :url
      t.string :language
      t.string :image_url

      t.timestamps null: false
    end
  end
end
