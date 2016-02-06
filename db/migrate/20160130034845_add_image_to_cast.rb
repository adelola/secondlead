class AddImageToCast < ActiveRecord::Migration
  def change
    add_column :casts, :image_url, :string
  end
end
