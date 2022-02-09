json.extract! user, :id, :username, :email

if user.avatar.attached?
    json.photoUrl url_for(user.avatar)
else
    nil
end