import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import BlogComponentContainer from './user/blog_index_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";

const App = () => (
    <div>
        <Modal />
        <header>
            {/* <div className="transparent-header"></div> */}
            <GreetingContainer />
        </header>

        <AuthRoute path="/login"
            component={LoginFormContainer} />
            {/* render={() => <Link to="/signup" className="signup-link">Sign up</Link>} */}
                
        <AuthRoute path="/signup"
            component={SignupFormContainer} />
            {/* render={() => <Link to="/login" className="login-link">Log in</Link>} */}

        <ProtectedRoute path="/dashboard" component={BlogComponentContainer} />
    </div>
);

export default App;