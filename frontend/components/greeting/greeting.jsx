import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const newSession = () => {
        return(
            <Link to="/" className="header-logo">S</Link>
        );
    };
    const currSession = () => {
        return(
            <nav className="dashboard-nav">
                {/* <div className="transparent-header"></div> */}
                <Link to="/dashboard" className="header-logo">S</Link>
                <button className="logout-button" onClick={props.logout}>Log Out</button>
            </nav>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Greeting;