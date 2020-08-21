import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const newSession = () => {
        return(
            <nav className="header-nav">
                <Link to="/" className="header-logo">S</Link>
                <div className="header-pane">
                    <Link to="/login" className="login-link">Log in</Link>
                    <Link to="/signup" className="signup-link">Sign up</Link>
                </div>
            </nav>
        );
    };
    const currSession = () => {
        return(
            <nav className="dashboard-nav">
                {/* <div className="transparent-header"></div> */}
                <Link to="/dashboard" className="header-logo">S</Link>
                {/* <h2 className="header-name">{props.currentUser.username}</h2> */}
                <button className="logout-button" onClick={props.logout}>Log Out</button>
            </nav>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Greeting;