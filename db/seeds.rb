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
Like.delete_all
Follow.delete_all

# for demo user login
demo_user = User.create!(
  username: 'demouser',
  email: 'demo@user.com',
  password: 'demouser'
)

demo_user_photo = open('https://somerslt-seeds.s3.us-west-1.amazonaws.com/annie-spratt-fbAnIjhrOL4-unsplash.jpg')
demo_user.avatar.attach(io: demo_user_photo, filename: 'annie-spratt-fbAnIjhrOL4-unsplash.jpg')

user2 = User.create!(
  username: 'somerslt',
  email: 'somerslt@somerslt.com',
  password: 'somerslt'
)

user2_photo = open('https://somerslt-seeds.s3.us-west-1.amazonaws.com/kelly-sikkema-mdADGzyXCVE-unsplash.jpg')
user2.avatar.attach(io: user2_photo, filename: 'kelly-sikkema-mdADGzyXCVE-unsplash.jpg')

user3 = User.create!(
  username: 'kevzhang',
  email: 'kz@porsche.com',
  password: 'porsche911'
)

user3_photo = open('https://somerslt-seeds.s3.us-west-1.amazonaws.com/jannis-lucas-23HJl7I2g-U-unsplash.jpg')
user3.avatar.attach(io: user3_photo, filename: 'jannis-lucas-23HJl7I2g-U-unsplash.jpg')

user4 = User.create!(
  username: 'bokchoy69',
  email: 'ac@dogsceht.com',
  password: 'sjsugraduate'
)

user4_photo = open('https://somerslt-seeds.s3.us-west-1.amazonaws.com/ales-nesetril-Im7lZjxeLhg-unsplash.jpg')
user4.avatar.attach(io: user4_photo, filename: 'ales-nesetril-Im7lZjxeLhg-unsplash.jpg')

user5 = User.create!(
  username: 'winter',
  email: 'wh@frontend.com',
  password: 'staycold'
)

user5_photo = open('https://somerslt-seeds.s3.us-west-1.amazonaws.com/olav-tvedt-6lSBynPRaAQ-unsplash.jpg')
user5.avatar.attach(io: user5_photo, filename: 'olav-tvedt-6lSBynPRaAQ-unsplash.jpg')

photoblog6 = Blog.create!(
  title: "Reaching for the Apple dream",
  body: "Just missing that Airpods Pro",
  media_type: "photo",
  author_id: user5.id
)

file7 = open('https://somerslt-seeds.s3-us-west-1.amazonaws.com/julian-o-hayon-Bs-zngH79Ds-unsplash.jpg')
photoblog6.photo.attach(io: file7, filename: 'julian-o-hayon-Bs-zngH79Ds-unsplash.jpg')

like2 = Like.create!(
  blog_id: photoblog6.id,
  user_id: user3.id
)

blog1 = Blog.create!(
  title: "simple text",
  body: "What a great day to be alive!",
  media_type: "text",
  author_id: demo_user.id
)

urlBlog2 = Blog.create!(
  title: "https://www.porsche.com/usa/models/911/911-turbo-models/911-turbo/",
  body: "I enjoy going to this website to build my Porsche 911 of dreams",
  media_type: "url",
  author_id: user3.id
)

like3 = Like.create!(
  blog_id: urlBlog2.id,
  user_id: user5.id
)

blog2 = Blog.create!(
  title: "Where do we go",
  body: "let's go flying!",
  media_type: "text",
  author_id: user2.id
)

blog3 = Blog.create!(
  title: "My favorite commit word",
  body: "up",
  media_type: "text",
  author_id: user3.id
)

like4 = Like.create!(
  blog_id: blog3.id,
  user_id: user4.id
)

like5 = Like.create!(
  blog_id: blog3.id,
  user_id: user5.id
)

photoblog7 = Blog.create!(
  title: "Check out the quote in the photo",
  body: "Can anyone relate? No?",
  media_type: "photo",
  author_id: user4.id
)

file8 = open('https://somerslt-seeds.s3-us-west-1.amazonaws.com/ben-kolde-bs2Ba7t69mM-unsplash.jpg')
photoblog7.photo.attach(io: file8, filename: 'ben-kolde-bs2Ba7t69mM-unsplash.jpg')

photoblog = Blog.create!(
  title: "A wonderful photo",
  body: "Living the dream",
  media_type: "photo",
  author_id: demo_user.id
)

# file = File.open('app/assets/images/tumblr_default_avatar.png')
# photoblog.photo.attach(io: file, filename: 'tumblr_default_avatar.png')

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')
file2 = open('https://somerslt-seeds.s3-us-west-1.amazonaws.com/alvan-nee-T-0EW-SEbsE-unsplash.jpg')
photoblog.photo.attach(io: file2, filename: 'alvan-nee-T-OEW-SEbsE-unsplash.jpg')

blog4 = Blog.create!(
  title: "This is how I do git push",
  body: "full-send",
  media_type: "text",
  author_id: user4.id
)

like6 = Like.create!(
  blog_id: blog4.id,
  user_id: user3.id
)

quoteBlog = Blog.create!(
  title: "Do or do not, there is no try",
  body: "Yoda",
  media_type: "quote",
  author_id: user2.id
)

like1 = Like.create!(
  blog_id: quoteBlog.id,
  user_id: demo_user.id
)

photoblog2 = Blog.create!(
  title: "This is how I see the world",
  body: "and my brain processes it",
  media_type: "photo",
  author_id: user4.id
)

file3 = open('https://somerslt-seeds.s3-us-west-1.amazonaws.com/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg')
photoblog2.photo.attach(io: file3, filename: 'kevin-ku-w7ZyuGYNpRQ-unsplash.jpg')

urlBlog = Blog.create!(
  title: "https://www.google.com",
  body: "The best search engine there is!",
  media_type: "url",
  author_id: demo_user.id
)

photoblog4 = Blog.create!(
  title: "Forest Green Porsche 911 GT2 RS",
  body: "This looks so nice!",
  media_type: "photo",
  author_id: user3.id
)

file5 = open('https://somerslt-seeds.s3-us-west-1.amazonaws.com/ya-za-xvI36zcqP2M-unsplash.jpg')
photoblog4.photo.attach(io: file5, filename: 'ya-za-xvI36zcqP2M-unsplash.jpg')

photoblog5 = Blog.create!(
  title: "Silver Porsche 911",
  body: "Another really nice porsche",
  media_type: "photo",
  author_id: user3.id
)

file6 = open('https://somerslt-seeds.s3-us-west-1.amazonaws.com/martin-katler-dlqYkIlDa3k-unsplash.jpg')
photoblog5.photo.attach(io: file6, filename: 'martin-katler-dlqYkIlDa3k-unsplash.jpg')

like7 = Like.create!(
  blog_id: photoblog5.id,
  user_id: demo_user.id
)

like8 = Like.create!(
  blog_id: photoblog5.id,
  user_id: user5.id
)

urlBlog3 = Blog.create!(
  title: "http://aaonline.io/",
  body: "my favorite url",
  media_type: "url",
  author_id: user3.id
)

quoteBlog2 = Blog.create!(
  title: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  body: "Benjamin Franklin",
  media_type: "quote",
  author_id: demo_user.id
)

urlBlog4 = Blog.create!(
  title: "https://www.youtube.com/watch?v=_b2b_uKfxkU",
  body: "This is one of my favorite songs I listen to",
  media_type: "url",
  author_id: user5.id
)

photoblog3 = Blog.create!(
  title: "A supercar sitting still",
  body: "featuring a model from the Mclaren super sport series",
  media_type: "photo",
  author_id: user5.id
)

file4 = open('https://somerslt-seeds.s3-us-west-1.amazonaws.com/tim-meyer-timm-jpeg-9bXABoxcxIU-unsplash.jpg')
photoblog3.photo.attach(io: file4, filename: 'tim-meyer-timm-jpeg-9bXABoxcxIU-unsplash.jpg')

like9 = Like.create!(
  blog_id: photoblog3.id,
  user_id: user3.id
)

drawing = Blog.create!(
  title: "An Idea...",
  body: "Link coming later",
  media_type: "photo",
  author_id: user2.id
)

filex = open('https://somerslt-seeds.s3-us-west-1.amazonaws.com/drawing_draft.jpg')
drawing.photo.attach(io: filex, filename: 'drawing_draft.jpg')

follow1 = Follow.create!(
  follower_id: demo_user.id,
  followee_id: user5.id
)

follow2 = Follow.create!(
  follower_id: user5.id,
  followee_id: demo_user.id
)

follow3 = Follow.create!(
  follower_id: user2.id,
  followee_id: demo_user.id
)

follow4 = Follow.create!(
  follower_id: user3.id,
  followee_id: demo_user.id
)

follow5 = Follow.create!(
  follower_id: user4.id,
  followee_id: demo_user.id
)

follow5 = Follow.create!(
  follower_id: user3.id,
  followee_id: user4.id
)