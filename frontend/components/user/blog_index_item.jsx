import React from 'react';

// function figureOwner(props) {
//     let blogId = props.blog.authorId;
//     let blogOwner;
//     props.allUsers.forEach( user => {
//         if(user.id === blogId) {
//             blogOwner = user.username;
//             break;
//         }
//     });
// }

const BlogIndexItem = (props) => {
    console.log(props);

    return(
        <li className="blog-block">
            <h1 className="avatar"></h1>
            <div className="blog-info">
                <h1 className="blog-title">{props.blog.title}</h1>
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