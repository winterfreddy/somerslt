# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  blog_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :blog_id, presence: true
    validates :user_id, presence: true

    belongs_to :blog,
        primary_key: :id,
        foreign_key: :blog_id,
        class_name: :Blog

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
