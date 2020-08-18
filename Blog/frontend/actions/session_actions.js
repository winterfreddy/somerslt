
import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// regular action creators
const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

// thunk action creators
export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user)
        .then( (user) => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
        // .catch( (error) => dispatch(receiveErrors(error.responseJSON)))
)

export const login = (user) => dispatch => (
    SessionApiUtil.login(user)
        .then( (user) => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
        // .catch( (error) => dispatch(receiveErrors(error.responseJSON)))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then( (user) => dispatch(logoutCurrentUser()))
)
