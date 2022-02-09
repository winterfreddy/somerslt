
import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

// regular action creators
const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = (like) => ({
    type: DELETE_LIKE,
    like
})

// thunk action creators
export const createLike = (like) => dispatch => (
    LikeApiUtil.createLike(like)
        .then((like) => dispatch(receiveLike(like)))
)

export const deleteLike = (like) => dispatch => (
    LikeApiUtil.deleteLike(like)
        .then(() => dispatch(removeLike(like)))
)