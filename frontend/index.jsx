import React from "react";
import ReactDOM from "react-dom";
// import { signup, login, logout } from './util/session_api_util'
import { signup, login, logout } from './actions/session_actions'
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if(window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root);

    //testing begins
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //testing ends

});