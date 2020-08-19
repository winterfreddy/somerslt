import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <div className="transparent-header"></div>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login"
            component={LoginFormContainer} />
            {/* render={() => <Link to="/signup" className="signup-link">Sign up</Link>} */}
                
        <AuthRoute path="/signup"
            component={SignupFormContainer} />
            {/* render={() => <Link to="/login" className="login-link">Log in</Link>} */}
    </div>
);

export default App;