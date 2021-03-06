# == Schema Information
#
# Table name: blogs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  media_type :string
#
class Blog < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    validates :author_id, presence: true
    
    # validate :ensure_photo

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

    has_many :likes,
        primary_key: :id,
        foreign_key: :blog_id,
        class_name: :Like
    
    has_many :likers,
        through: :likes,
        source: :user

    # def ensure_photo
    #     unless self.photo.attached?
    #         errors[:photo] << "must be attached"
    #     end
    # end
end
