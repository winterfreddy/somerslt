import React from 'react';

const BlogIndexItem = (props) => {
    // console.log(props);
    return(
        <li className="blog-block">
            <h1 className="avatar"></h1>
            <div className="blog-info">
                <h1 className="blog-title">{props.blog.title}</h1>
                <p className="blog-body">{props.blog.body}</p>
            </div>
        </li>
    )
}

export default BlogIndexItem;