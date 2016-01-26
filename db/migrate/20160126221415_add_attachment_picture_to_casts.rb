class AddAttachmentPictureToCasts < ActiveRecord::Migration
  def self.up
    change_table :casts do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :casts, :picture
  end
end
