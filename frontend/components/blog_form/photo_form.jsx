import React from 'react';
import { Link } from 'react-router-dom';
import { createPhoto, updatePhoto } from '../../util/blog_api_util';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.blog.id,
            title: props.blog.title,
            body: props.blog.body,
            photoFile: null,
            photoUrl: props.blog.photoUrl
        }
        // title is url
        // body is description

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('blog[title]', this.state.title);
        formData.append('blog[body]', this.state.body);
        formData.append('blog[media_type]', this.props.blog.media_type);
        formData.append('blog[author_id]', this.props.blog.author_id);
        if(this.state.photoFile) {
            formData.append('blog[photo]', this.state.photoFile);
        }

        if (this.props.formType === 'edit-photo-form') {
            updatePhoto(formData, this.state.id).then(() => {
                document.getElementById("edit-form-button").click();
            })
        }
        else {
            createPhoto(formData).then(this.props.closeModal);
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if(file) {
            fileReader.readAsDataURL(file);
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
        if (!this.state.title || !this.state.body || !this.state.photoUrl) {
            return false;
        }
        return true;
    }

    renderCheck() {
        if (this.canSubmit()) {
            return (
                <label className="good-check"><i className="fas fa-check"></i></label>
            )
        } else {
            return (
                <label className="incomplete-check"><i className="fas fa-times"></i></label>
            )
        }
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;
        return (
            <div className={this.props.formType === 'edit-photo-form' ? "edit-photo-block" : "form-photo-block"}>
                <h1 className="avatar-form"></h1>
                <form className="photo-form-container" onSubmit={this.handleSubmit}>
                    <h3 id="text-form-user">{this.props.currentUser.username}</h3>
                    <div className="photo-form-title">
                        <input type="file" onChange={this.handleFile}/>
                    </div>
                    <div className="file-preview">
                        {preview}
                    </div>
                    <input type="text"
                        className="text-form-title"
                        placeholder="Title of this photo"
                        onChange={this.update('title')}
                        value={this.state.title || ""}
                    />
                    <br />
                    <textarea cols="62" rows="10"
                        className="text-form-body"
                        placeholder="Your photo description goes here"
                        onChange={this.update('body')}
                        value={this.state.body || ""}
                    />
                    <div className="photo-form-footer">
                        {this.props.formType === 'edit-photo-form' ? this.renderEdit() : this.renderExitModal()}
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

export default PhotoForm;