
import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

// regular action creators
const receiveFollow = (relationship) => ({
    type: RECEIVE_FOLLOW,
    relationship
})

const removeFollow = (relationship) => ({
    type: REMOVE_FOLLOW,
    relationship
})

// thunk action creators
export const follow = (relationship) => dispatch => (
    FollowApiUtil.follow(relationship)
        .then((relationship) => dispatch(receiveFollow(relationship)))
)

export const unfollow = (relationship) => dispatch => (
    FollowApiUtil.unfollow(relationship)
        .then(() => dispatch(removeFollow(relationship)))
)