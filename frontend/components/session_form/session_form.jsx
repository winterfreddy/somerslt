import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    handleUpdate(payload) {
        return (e) => this.setState({ [payload]: e.currentTarget.value });
    }

    handleDemo() {
        return (
            <button onClick={this.handleDemoClick} className="session-submit">Demo login</button>
        )
    }

    handleDemoClick(e) {
        e.preventDefault();
        this.setState({
            email: "demo@user.com",
            password: "demouser"
        }, () => this.handleSubmit(e));
    }

    renderErrors() {
        if ((this.state.email === "" && this.state.password === "") && (this.props.errors.length === 1 || this.props.errors.length === 3) ) {
            return (
                <div className="errors">
                    You know you have to fill all that out right?
                </div>
            )
        }
        else if ((this.state.username === "" || this.state.email === "" || this.state.password === "") && (this.props.errors.length === 1 || this.props.errors.length === 3)) {
            return (
                <div className="errors">
                    Did you fill everything out?
                </div>
            )
        }
        else if (this.props.errors.length > 0) {
            return (
                <ul className="errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        }
    }


    renderUserEmail() {
        if(this.props.formType === 'signup') {
            return (
                <div>
                    <input type="text"
                        className="login-input"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.handleUpdate('username')} />
                    <input type="text"
                        className="login-input"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleUpdate('email')} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <input type="text"
                        className="login-input"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleUpdate('email')} />
                </div>
            )
        }
    }

    renderLoginButton() {
        return(
            <Link to="/login" className="login-button">Log in</Link>
        )
    }

    renderSigninButton() {
        return(
            <Link to="/signup" className="signup-button">Sign up</Link>
        )
    }

    render() {
        return (
            <div className="login-form-container">
                {this.props.formType === 'login' ? this.renderSigninButton() : this.renderLoginButton()}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <label className="title">somerslt</label>
                    <div className="login-form">
                        {this.renderUserEmail()}
                        <input type="password"
                            className="login-input"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleUpdate('password')} />
                        <button className="session-submit" type="submit" value={this.props.formType} >{this.props.formType}</button>
                        {this.props.formType === 'login' ? this.handleDemo() : ''}
                    </div>
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default SessionForm;