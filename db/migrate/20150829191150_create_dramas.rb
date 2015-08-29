class CreateDramas < ActiveRecord::Migration
  def change
    create_table :dramas do |t|

      t.timestamps null: false
    end
  end
end
