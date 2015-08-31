class CreateDramaCasts < ActiveRecord::Migration
  def change
    create_table :drama_casts do |t|
      t.belongs_to :drama
      t.belongs_to :cast

      t.timestamps null: false
    end
  end
end
