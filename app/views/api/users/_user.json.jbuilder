json.extract! user, :id, :username, :email
json.likes_count user.likes.length

if user.avatar.attached?
    json.photoUrl url_for(user.avatar)
else
    nil
end