import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    console.log(props);
    const newSession = () => {
        return(
            <nav className="login-signup">
                <Link to="/login">Login</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link>
            </nav>
        );
    };
    const currSession = () => {
        // console.log(props);
        return(
            <hgroup className="header-group">
                <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
                <button className="header-button" onClick={props.logout}>Log Out</button>
            </hgroup>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Greeting;