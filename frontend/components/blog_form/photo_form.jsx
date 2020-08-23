import React from 'react';
import { Link } from 'react-router-dom';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.blog;
        // title is url
        // body is description

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const blog = Object.assign({}, this.state);
        if (this.props.formType === 'edit-photo-form') {
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
            <div className={this.props.formType === 'edit-photo-form' ? "edit-photo-block" : "form-photo-block"}>
                <h1 className="avatar-form"></h1>
                <form className="photo-form-container" onSubmit={this.handleSubmit}>
                    <h3 id="text-form-user">{this.props.currentUser.username}</h3>
                    <div className="photo-form-title">
                        <button className="upload-photo">Upload Photo</button>
                        {this.state.title === "" ? "" : this.state.title}
                    </div>
                    <br />
                    <textarea cols="62" rows="10"
                        className="text-form-body"
                        placeholder="Your photo description goes here"
                        onChange={this.update('body')}
                        value={this.state.body || ""}
                    />
                    <div className="photo-form-footer">
                        {this.props.formType === 'edit-photo-form' ? this.renderEdit() : this.renderExitModal()}
                        <button className="form-submit" type="submit">Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PhotoForm;