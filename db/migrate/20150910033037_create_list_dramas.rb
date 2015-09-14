class CreateListDramas < ActiveRecord::Migration
  def change
    create_table :list_dramas do |t|
      t.integer :drama_id
      t.integer :list_id

      t.timestamps
    end
  end
end
