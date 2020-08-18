import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        console.log(this.props);
        // debugger
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    handleUpdate(payload) {
        return (e) => this.setState({ [payload]: e.currentTarget.value });
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to SOMERSLT!
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                        <label> Username:
                            <input type="text"
                            className="login-input"
                            value={this.state.username}
                            onChange={this.handleUpdate('username')}/>
                        </label>
                        <label> Password:
                            <input type="password"
                                className="login-input"
                                value={this.state.password}
                                onChange={this.handleUpdate('password')} />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;