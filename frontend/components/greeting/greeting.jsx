import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const newSession = () => {
        return(
            <Link to="/" className="header-logo">S</Link>
        );
    };

    
    const currSession = () => {
        
        const dropdown = () => {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        return(
            <nav className="dashboard-nav">
                {/* <div className="transparent-header"></div> */}
                <Link to="/dashboard" className="header-logo">S</Link>
                <div className="dropdown">
                    <button onClick={() => dropdown()} className="dropdown-button" type="button"><i class="fas fa-user"></i></button>
                    <div id="myDropdown" className="dropdown-content">
                        <div className="dropdown-header">
                            <label className="account-label">Account</label>
                            <button className="logout-button" onClick={props.logout}>Log out&nbsp;&nbsp;<i class="fas fa-sign-out-alt"></i></button>
                        </div>
                        <div className="dropdown-like">
                            <a href="#"><i class="fas fa-heart"></i>&nbsp;Likes</a>
                        </div>
                        <div className="dropdown-follow">
                            <a href="#"><i class="fas fa-user-plus"></i>&nbsp;Following</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Greeting;