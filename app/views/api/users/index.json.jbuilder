@users.each do |user|
    json.set! user.id do
        json.partial! 'user', user: user
        json.followIds user.active_relationships do |relationship|
            json.extract! relationship, :id, :followee_id
        end
    end
end