import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import blogsReducer from "./blogs_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    blogs: blogsReducer
});

export default entitiesReducer;