class AddColumnsToCast < ActiveRecord::Migration
  def change
    add_column :casts, :dob, :date
    add_column :casts, :star_sign, :string
    add_column :casts, :height, :string
    add_column :casts, :weight, :string
    add_column :casts, :blood_type, :string
    add_column :casts, :age, :integer
  end
end
