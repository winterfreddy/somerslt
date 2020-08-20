
import * as BlogApiUtil from '../util/blog_api_util';

export const RECEIVE_BLOGS = "RECEIVE_BLOGS";
export const RECEIVE_BLOG = "RECEIVE_BLOG";
export const REMOVE_BLOG = "REMOVE_BLOG";
export const RECEIVE_BLOG_ERRORS = "RECEIVE_BLOG_ERRORS";

// regular action creators
const receiveBlogs = (blogs) => ({
    type: RECEIVE_BLOGS,
    blogs
})

const receiveBlog = (blog) => ({
    type: RECEIVE_BLOG,
    blog
})

const removeBlog = (blog) => ({
    type: REMOVE_BLOG,
    blog
})

const receiveBlogErrors = (errors) => ({
    type: RECEIVE_BLOG_ERRORS,
    errors
})

// thunk action creators
export const fetchBlogs = () => dispatch => (
    BlogApiUtil.fetchBlogs()
        .then( (blogs) => dispatch(receiveBlogs(blogs)))
)

export const fetchBlog = (id) => dispatch => (
    BlogApiUtil.fetchBlog(id)
        .then( (blog) => dispatch(receiveBlog(blog)),
            error => dispatch(receiveBlogErrors(error.responseJSON))
        )
)

export const createBlog = (blog) => dispatch => (
    BlogApiUtil.createBlog(blog)
        .then( (blog) => dispatch(receiveBlog(blog)),
            error => dispatch(receiveBlogErrors(error.responseJSON))
        )
)

export const updateBlog = (blog) => dispatch => (
    BlogApiUtil.updateBlog(blog)
        .then( (blog) => dispatch(receiveBlog(blog)),
            error => dispatch(receiveBlogErrors(error.responseJSON))
        )
)

export const deleteBlog = (blog) => dispatch => (
    BlogApiUtil.deleteBlog(blog)
        .then( () => dispatch(removeBlog(blog)),
            error => dispatch(receiveBlogErrors(error.responseJSON))
        )
)