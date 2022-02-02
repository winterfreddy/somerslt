import React from 'react';
import { Link } from 'react-router-dom';

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
        if(this.props.formType === 'edit-form') {
            this.props.processBlog(blog).then( () => {
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

    canSubmit() {
        if (!this.state.title || !this.state.body) {
            return false;
        }
        return true;
    }

    renderCheck() {
        if(this.canSubmit()) {
            return(
                <label className="good-check"><i className="fas fa-check"></i></label>
            )
        } else {
            return(
                <label className="incomplete-check"><i className="fas fa-times"></i></label>
            )
        }
    }

    avatarPhotoUrl() {
        if(this.props.currentUser.photoUrl) {
            return (<img className='avatar-form' src={this.props.currentUser.photoUrl}/>)
        }
        else {
            return (<img className='avatar-form-default'/>)
        }
    }

    render() {
        return(
            <div className={this.props.formType === 'edit-form' ? "edit-form-block" : "form-block"}>
                {this.avatarPhotoUrl()}
                <form className="text-form-container" onSubmit={this.handleSubmit}>
                    <h3 id="text-form-user">{this.props.currentUser.username}</h3>
                    <input type="text"
                        className="text-form-title"
                        placeholder="Title"
                        onChange={this.update('title')}
                        value={this.state.title || ""}
                        />
                    <br/>
                    <textarea cols="62" rows="10"
                        className="text-form-body"
                        placeholder="Your text goes here"
                        onChange={this.update('body')}
                        value={this.state.body || ""}
                        />
                    <div className="text-form-footer">
                        {this.props.formType === 'edit-form' ? this.renderEdit() : this.renderExitModal()}
                        <div>
                            {this.renderCheck()}
                            <button className="form-submit" type="submit" disabled={this.canSubmit() ? false : 'disabled'}>Post</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default TextForm;