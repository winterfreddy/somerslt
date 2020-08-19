
import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";

// regular action creators
const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveLoginErrors = (errors) => ({
    type: RECEIVE_LOGIN_ERRORS,
    errors
})

const receiveSignupErrors = (errors) => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors
})

// thunk action creators
export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user)
        .then( (user) => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveSignupErrors(error.responseJSON))
        )
        // .catch( (error) => dispatch(receiveErrors(error.responseJSON)))
)

export const login = (user) => dispatch => (
    SessionApiUtil.login(user)
        .then( (user) => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveLoginErrors(error.responseJSON))
        )
        // .catch( (error) => dispatch(receiveErrors(error.responseJSON)))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then( () => dispatch(logoutCurrentUser()))
)
