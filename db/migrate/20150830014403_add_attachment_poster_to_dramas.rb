class AddAttachmentPosterToDramas < ActiveRecord::Migration
  def self.up
    change_table :dramas do |t|
      t.attachment :poster
    end
  end

  def self.down
    remove_attachment :dramas, :poster
  end
end
