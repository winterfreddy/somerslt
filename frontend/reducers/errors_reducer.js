import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import loginErrorsReducer from "./login_errors_reducer";
import signupErrorsReducer from "./signup_errors_reducer";
import blogErrorsReducer from "./blog_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    login: loginErrorsReducer,
    signup: signupErrorsReducer,
    blog: blogErrorsReducer
});

export default errorsReducer;