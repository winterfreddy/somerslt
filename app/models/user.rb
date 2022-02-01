# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP}
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :session_token, presence: true

    has_many :blogs,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Blog

    has_many :likes,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Like

    has_many :liked_blogs,
        through: :likes,
        source: :blog

    has_many :active_relationships, # This user actively follows other user(s)
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :Follow,
        dependent: :destroy

    has_many :passive_relationships, # This user is followed by other user(s)
        primary_key: :id,
        foreign_key: :followee_id,
        class_name: :Follow,
        dependent: :destroy

    has_many :followee_users,
        through: :active_relationships,
        source: :followee_user

    has_many :follower_users,
        through: :passive_relationships,
        source: :follower_user

    has_one_attached :avatar

    #AASPIRE

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

end
