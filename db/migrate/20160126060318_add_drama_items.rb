class AddDramaItems < ActiveRecord::Migration
  def change
    add_column :dramas, :romanized_title, :string
    add_column :dramas, :also_known_as, :string
    add_column :dramas, :network, :string
    add_column :dramas, :broadcast_period, :string
    add_column :dramas, :rating, :string
    add_column :dramas, :viki_url, :string
    add_column :dramas, :drama_fever_url, :string
  end
end
