# Somerslt
Somerslt is a single-page application that mirrors the feel and functionality of Tumblr. Somerslt, just like Tumblr, allows you to post blogs of various media whether that's a text or a photo to the feed that can be viewed by logged-in users. Users have the power to like or dislike a blog, and edit or delete their own blog(s).

You can visit the live version here: [Somerslt](https://somerslt.herokuapp.com/#/)

# Technologies used in Somerslt:

## Backend
* Ruby on Rails
* PostgreSQL
* Active Storage
* Amazon Web Services (AWS) S3 database storage

## Frontend
* HTML
* CSS
* Javascript
* React-Redux

## Other Technologies
* Deployment to Heroku

# Overview of Somerslt Application Features

## Homepage
![somerslt-homepage](https://github.com/winterfreddy/somerslt/blob/master/app/assets/images/somerslt-homepage.png)

## Login/Signup Screen
#### Utilized the user authentication pattern to handle login and signup for users
![somerslt-login](https://github.com/winterfreddy/somerslt/blob/master/app/assets/images/somerslt-login.png)

![somerslt-signup](https://github.com/winterfreddy/somerslt/blob/master/app/assets/images/somerslt-signup.png)

## Dashboard
#### User(s) can view all of the posts with most recent post at the top.
![somerslt-dashboard](https://github.com/winterfreddy/somerslt/blob/master/app/assets/images/somerslt-dashboard-new.png)

## Post a blog example
#### User(s) can post any media form, in this example, a quote.
![somerslt-form](https://github.com/winterfreddy/somerslt/blob/master/app/assets/images/somerslt-form-new.png)

## Like/Unlike Posts
#### User(s) can like or dislike any post.
![somerslt-like](https://github.com/winterfreddy/somerslt/blob/master/app/assets/images/somerslt-like-new.png)

# Technical Challenges

## Edit Existing Photo Blog
The challenge was trying to update an existing photo blog. In this one, I was passing formData (which is the data parameter below) that contained information about that photo, the title, the body, as well as photoURL into the AJAX request. The problem was that I was not able to grab the specific id linked to that photo from formData. If that AJAX request could not grab that id inside formData, the blogs controller would not be able to parse it and throw an error. To remedy that, I passed in another variable which is the id linked to that formData and this solution below worked.

```javascript
export const updatePhoto = (data, blogId) => {
    return $.ajax({
        url: `/api/blogs/${blogId}`,
        method: 'PATCH',
        data: data,
        contentType: false,
        processData: false
    })
}
```

## Putting HTML elements on a homepage
The challenge was trying to figure out how to have the specific HTML elements that make up my homepage as you saw in the 'Overview of Somerslt Application Features'. I originally thought I could put the homepage customization in places such as in the [greeting.jsx](https://github.com/winterfreddy/somerslt/blob/master/frontend/components/greeting/greeting.jsx) inside the newSession method or in the [session_form.jsx](https://github.com/winterfreddy/somerslt/blob/master/frontend/components/session_form/session_form.jsx) as another new method that gets called when rerendering. So after looking at those places, I thought about making a specific route in [App.jsx](https://github.com/winterfreddy/somerslt/blob/master/frontend/components/App.jsx) that would only render those HTML elements and this solution below is what I came up with.

```javascript
<Route exact path="/" render={() => 
    <div>
        <label className="homepage-title">somerslt</label>
        <p className="homepage-description">Come for what you see. Stay for what you like.</p>
        <div className="homepage-links">
            <Link to="/signup" className="signup-link">Get Started</Link>
            <Link to="/login" className="login-link">Log in</Link>
        </div>
    </div>
}/>
```

# For Future Releases
* Create a 'discover' page for users without an account to see blogs
* Create a 'like' page for users to see what they liked
* A loading screen of a person somersaulting across the screen
