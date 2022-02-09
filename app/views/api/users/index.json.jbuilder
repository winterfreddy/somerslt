@users.each do |user|
    json.set! user.id do
        json.partial! 'user', user: user
        json.followIds user.active_relationships do |relationship|
            json.extract! relationship, :id, :followee_id
        end
        json.user_following user.followee_users do |follow|
            json.extract! follow, :username
        end
        json.following_user user.follower_users do |follow|
            json.extract! follow, :username
        end
        json.user_following_count user.followee_users.length
        json.following_user_count user.follower_users.length
    end
end