import React from 'react';
import { Link } from 'react-router-dom';

function figureOwner(props) {
    let blogId = props.blog.authorId;
    let blogOwner;
    props.allUsers.forEach( user => {
        if(user.id === blogId) {
            blogOwner = user.username;
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
                    <h1>{props.blog.title}</h1>
                    {/* {figureOwner(props)} */}
                    <Link to={`/blogs/${props.blogId}/edit`} className="edit-link">Edit</Link>
                </div>
                {/* <h1 className="blog-title">{props.blog.title}</h1> */}
                {/* <h1 className="blog-title">{figureOwner(props)}</h1> */}
                <p className="blog-body">{props.blog.body}</p>
                <div className="blog-footer">
                    <label className="blog-notes">X notes</label>
                    <label className="blog-like">Like</label>
                </div>
            </div>
        </li>
    )
}

export default BlogIndexItem;