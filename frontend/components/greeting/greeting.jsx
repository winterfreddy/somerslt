import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const newSession = () => {
        return(
            <nav className="login-signup">
                <Link to="/" className="header-logo">S</Link>
                <Link to="/login" className="login-link">Log in</Link>
                <Link to="/signup" className="signup-link">Sign up</Link>
            </nav>
        );
    };
    const currSession = () => {
        return(
            <hgroup className="header-group">
                <Link to="/" className="header-logo">S</Link>
                {/* <h2 className="header-name">{props.currentUser.username}</h2> */}
                <button className="header-button" onClick={props.logout}>Log Out</button>
            </hgroup>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Greeting;