import React from 'react';

class TextForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.blog;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const blog = Object.assign({}, this.state);
        this.props.processBlog(blog).then(this.props.closeModal);
    }

    update(payload) {
        return (e) => this.setState({ [payload]: e.currentTarget.value });
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return(
            <div className="form-block">
                <h1 className="avatar-form"></h1>
                <form className="text-form-container" onSubmit={this.handleSubmit}>
                    <h3 id="text-form-user">{this.props.currentUser.username}</h3>
                    <input type="text"
                        className="text-form-title"
                        placeholder="Title"
                        onChange={this.update('title')}
                        value={this.state.title || ""}
                        />
                    <br/>
                    <textarea cols="30" rows="10"
                        placeholder="Your text goes here"
                        onChange={this.update('body')}
                        value={this.state.body || ""}
                        />
                    <div className="text-form-footer">
                        <button className="close-button" onClick={this.props.closeModal} type="button">Close</button>
                        <button className="form-submit" type="submit">Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TextForm;