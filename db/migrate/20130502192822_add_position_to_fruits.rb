class AddPositionToFruits < ActiveRecord::Migration
  def change
    add_column :fruits, :position, :integer, :default => 0
  end
end
