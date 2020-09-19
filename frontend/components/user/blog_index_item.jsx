import React from 'react';
import { Link } from 'react-router-dom';
import { createLike, deleteLike } from '../../util/like_api_util';

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
                {renderLinks(props.blog.media_type, props.blog.id)}
                <button className="delete-button" onClick={() => props.deleteBlog(props.blog)}><i className="fas fa-trash-alt"></i></button>
            </div>
        )
    }
}

function likeActions(props) {
    let likeArray = props.blog.likerIds;
    let check = false;
    let likeBlog;
    if(likeArray) {
        likeArray.forEach( like => {
            if (like.user_id === props.currentUser.id) {
                check = true;
                likeBlog = like;
            }
        })
    }
    if(!check) {
        return (
            <button className="blog-like"
                onClick={() => props.createLike({ blog_id: props.blog.id, user_id: props.currentUser.id })}
            ><i className="far fa-heart"></i></button>
        )
    }
    else {
        return (
            <button className="blog-dislike"
                onClick={() => props.deleteLike(likeBlog)}
            ><i className="fas fa-heart"></i></button>
        )
    }
}

function renderLinks(media_type, blogId) {
    if(media_type === 'photo') {
        return (
            <Link to={`/blogs/${blogId}/edit_photo`} className="edit-link"><i className="fas fa-edit"></i></Link>
        )
    }
    if(media_type === 'quote') {
        return (
            <Link to={`/blogs/${blogId}/edit_quote`} className="edit-link"><i className="fas fa-edit"></i></Link>
        )
    }
    if(media_type === 'url') {
        return (
            <Link to={`/blogs/${blogId}/edit_url`} className="edit-link"><i className="fas fa-edit"></i></Link>
        )
    }
    else {
        return (
            <Link to={`/blogs/${blogId}/edit_text`} className="edit-link"><i className="fas fa-edit"></i></Link>
        )
    }
}

function renderBody(props) {
    let media_type = props.blog.media_type;
    if(media_type === 'photo') {
        return(
            <div>
                <img src={props.blog.photoUrl}/>
                <div className="blog-description">
                    <label className="photo-title">{props.blog.title}</label>
                    <p>{props.blog.body}</p>
                    <div className="blog-source">
                        <p>Source:&nbsp;</p>
                        {figureOwner(props)}
                    </div>
                </div>
            </div>
        )
    }
    if(media_type === 'quote') {
        return(
            <div className="quote-description">
                <label className="quote-title">"{props.blog.title}"</label>
                <label className="quote-body">-&nbsp;{props.blog.body}</label>
                <div className="quote-source">
                    <p>Source:&nbsp;</p>
                    {figureOwner(props)}
                </div>
            </div>
        )
    }
    if(media_type === 'url') {
        return(
            <div className="url-description">
                <a href={props.blog.title} className="url-title-link">{props.blog.title}</a>
                <label className="url-body">{props.blog.body}</label>
                <div className="url-source">
                    <p>Source:&nbsp;</p>
                    {figureOwner(props)}
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <p className="blog-body">{props.blog.body}</p>
                <div className="blog-description">
                    <p>{props.blog.title}</p>
                    <div className="blog-source">
                        <p>Source:&nbsp;</p>
                        {figureOwner(props)}
                    </div>
                </div>
            </div>
        )
    }
}

const BlogIndexItem = (props) => {
    return(
        <li className="blog-block">
            <h1 className="avatar"></h1>
            <div className="blog-info">
                <div className="blog-title">
                    {figureOwner(props)}
                    {ownerActions(props)}
                </div>
                {renderBody(props)}
                <div className="blog-footer">
                    <label className="blog-notes">{props.blog.likeCount} notes</label>
                    {likeActions(props)}
                </div>
            </div>
        </li>
    )
}

export default BlogIndexItem;