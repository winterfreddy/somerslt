# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Blog.delete_all

# for demo user login
demo_user = User.create!(
  username: 'demouser',
  email: 'demo@user.com',
  password: 'demouser'
)

user2 = User.create!(
  username: 'somerslt',
  email: 'somerslt@somerslt.com',
  password: 'somerslt'
)

blog1 = Blog.create!(
  title: "simple text",
  body: "What a great day to be alive!",
  media_type: "text",
  author_id: demo_user.id
)

blog2 = Blog.create!(
  title: "Where do we go",
  body: "let's go flying!",
  media_type: "text",
  author_id: user2.id
)

photoblog = Blog.create!(
  title: "A wonderful photo",
  body: "Living the dream",
  media_type: "photo",
  author_id: demo_user.id
)

# file = File.open('app/assets/images/tumblr_default_avatar.png')
# photoblog.photo.attach(io: file, filename: 'tumblr_default_avatar.png')

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')
file2 = open('https://somerslt-seeds.us-west-1.amazonaws.com/alvan-nee-T-0EW-SEbsE-unsplash.jpg')
photoblog.photo.attach(io: file2, filename: 'alvan-nee-T-OEW-SEbsE-unsplash.jpg')

quoteBlog = Blog.create!(
  title: "Do or do not, there is no try",
  body: "Yoda",
  media_type: "quote",
  author_id: user2.id
)

urlBlog = Blog.create!(
  title: "https://www.google.com",
  body: "The best search engine there is!",
  media_type: "url",
  author_id: demo_user.id
)