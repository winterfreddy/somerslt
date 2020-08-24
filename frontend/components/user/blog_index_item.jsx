import React from 'react';
import { Link } from 'react-router-dom';

function figureOwner(props) {
    let blogId = props.blog.author_id;
    let blogOwner;
    props.allUsers.forEach( user => {
        // console.log(user);
        if(user.id === blogId) {
            // console.log("checks off");
            blogOwner = user.username;
        }
        else {
            blogOwner = "user-deactivated";
        }
    });
    return(
        <h1>{blogOwner}</h1>
    )
}

// UTILIZE THE blogId FROM PROPS

const BlogIndexItem = (props) => {
    console.log(props);

    return(
        <li className="blog-block">
            <h1 className="avatar"></h1>
            <div className="blog-info">
                <div className="blog-title">
                    {figureOwner(props)}
                    <Link to={`/blogs/${props.blog.id}/edit_text`} className="edit-link">Edit</Link>
                </div>
                <p className="blog-body">{props.blog.body}</p>
                <div className="blog-description">
                    <p>{props.blog.title}</p>
                    <div className="blog-source">
                        <p>Source:&nbsp;</p>
                        {figureOwner(props)}
                    </div>
                </div>
                <div className="blog-footer">
                    <label className="blog-notes">X notes</label>
                    <label className="blog-like">Like</label>
                </div>
            </div>
        </li>
    )
}

export default BlogIndexItem;