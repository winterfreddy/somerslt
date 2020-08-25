json.extract! blog, :id, :title, :body, :media_type, :author_id

if blog.photo.attached?
    json.photoUrl url_for(blog.photo)
else
    nil
end