import React from 'react';
import { Link } from 'react-router-dom';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.blog;
        // title is url
        // body is url description

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.title || !this.state.body) {
            alert("Please fill everything out");
            return;
        }

        const blog = Object.assign({}, this.state);
        if (this.props.formType === 'edit-url-form') {
            this.props.processBlog(blog).then(() => {
                document.getElementById("edit-form-button").click();
            })
        }
        else {
            this.props.processBlog(blog).then(this.props.closeModal);
        }
    }

    update(payload) {
        return (e) => this.setState({ [payload]: e.currentTarget.value });
    }

    renderEdit() {
        return (
            <Link to="/dashboard" id="edit-form-button" className="close-button">Close</Link>
        )
    }

    renderExitModal() {
        return (
            <button className="close-button" onClick={this.props.closeModal} type="button">Close</button>
        )
    }

    render() {
        return (
            <div className={this.props.formType === 'edit-url-form' ? "edit-url-block" : "form-url-block"}>
                <h1 className="avatar-form"></h1>
                <form className="url-form-container" onSubmit={this.handleSubmit}>
                    <h3 id="text-form-user">{this.props.currentUser.username}</h3>
                    <input type="text"
                        className="url-form-title"
                        placeholder="Type or paste your url"
                        onChange={this.update('title')}
                        value={this.state.title || ""}
                    />
                    <br />
                    <textarea cols="62" rows="6"
                        className="quote-form-body"
                        placeholder="Add a url description"
                        onChange={this.update('body')}
                        value={this.state.body || ""}
                    />
                    <div className="url-form-footer">
                        {this.props.formType === 'edit-url-form' ? this.renderEdit() : this.renderExitModal()}
                        <button className="form-submit" type="submit">Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default QuoteForm;