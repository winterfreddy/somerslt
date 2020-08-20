import { RECEIVE_BLOGS, RECEIVE_BLOG, REMOVE_BLOG } from '../actions/blog_actions';

const blogsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_BLOGS:
            return action.blogs;
        case RECEIVE_BLOG:
            nextState[action.blog.id] = action.blog;
            return nextState;
        case REMOVE_BLOG:
            delete nextState[action.blog.id];
            return nextState;
        default:
            return state;
    }
}

export default blogsReducer;