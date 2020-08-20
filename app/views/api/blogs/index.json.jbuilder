@blogs.each do |blog|
    json.set! blog.id do
        json.partial! 'blog', blog: blog
    end
end