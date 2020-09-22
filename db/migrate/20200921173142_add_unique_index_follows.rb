class AddUniqueIndexFollows < ActiveRecord::Migration[5.2]
  def change

    add_index :follows, [:follower_id, :followee_id], unique: true

  end
end
