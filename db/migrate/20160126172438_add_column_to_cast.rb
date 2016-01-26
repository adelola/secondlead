class AddColumnToCast < ActiveRecord::Migration
  def change
    add_column :casts, :non_english_name, :string
  end
end
