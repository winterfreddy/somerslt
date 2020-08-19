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
            email: "something@something.com",
            password: "something"
        })
    }

    renderErrors() {
        // console.log(this.state);
        // console.log(this.props);
        // console.log(this.props.errors);
        if ((this.state.email === "" && this.state.password === "") && (this.props.errors.length === 1 || this.props.errors.length === 3) ) {
            return (
                <div className="errors">
                    You know you have to fill all that out right?
                </div>
            )
        }
        else if ((this.state.email === "" || this.state.password === "") && (this.props.errors.length === 1 || this.props.errors.length === 3)) {
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
                    <br/>
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

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <label className="title">somerslt</label>
                    {/* Please {this.props.formType} or {this.props.navLink} */}
                    <div className="login-form">
                        {this.renderUserEmail()}
                        <input type="password"
                            className="login-input"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleUpdate('password')} />
                        <br/>
                        <button className="session-submit" type="submit" value={this.props.formType} >{this.props.formType}</button>
                        <br/>
                        {this.props.formType === 'login' ? this.handleDemo() : ''}
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default SessionForm;