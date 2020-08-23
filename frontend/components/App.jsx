import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import BlogComponentContainer from './user/blog_index_container';
import EditTextContainer from "./blog_form/edit_text_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";

const App = () => (
    <div>
        <Modal />
        <header>
            {/* <div className="transparent-header"></div> */}
            <GreetingContainer />
        </header>


        <AuthRoute path="/login"component={LoginFormContainer} />
        <AuthRoute path="/signup"component={SignupFormContainer} />

        <ProtectedRoute path="/dashboard" component={BlogComponentContainer} />
        <ProtectedRoute path="/blogs/:blogId/edit_text" component={EditTextContainer} />
        
        <Route exact path="/" render={() => 
            <div>
                <label className="homepage-title">somerslt</label>
                <p className="homepage-description">Come for what you see. Stay for what you like.</p>
                <div className="homepage-links">
                    <Link to="/signup" className="signup-link">Get Started</Link>
                    <Link to="/login" className="login-link">Log in</Link>
                </div>
            </div>
        }/>
    </div>
);

export default App;