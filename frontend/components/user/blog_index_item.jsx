import React from 'react';
import { Link } from 'react-router-dom';

function figureOwner(props) {
    let blogId = props.blog.author_id;
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

function ownerActions(props) {
    if(props.currentUser.id === props.blog.author_id) {
        return(
            <div>
                <Link to={`/blogs/${props.blog.id}/edit_text`} className="edit-link"><i class="fas fa-edit"></i></Link>
                <button className="delete-button" onClick={() => props.deleteBlog(props.blog)}><i class="fas fa-trash-alt"></i></button>
            </div>
        )
    }
}

const BlogIndexItem = (props) => {
    // console.log(props);

    return(
        <li className="blog-block">
            <h1 className="avatar"></h1>
            <div className="blog-info">
                <div className="blog-title">
                    {figureOwner(props)}
                    {ownerActions(props)}
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
                    <label className="blog-like"><i class="far fa-heart"></i>Like</label>
                </div>
            </div>
        </li>
    )
}

export default BlogIndexItem;