class AddMediaType < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :media_type, :string
  end
end
