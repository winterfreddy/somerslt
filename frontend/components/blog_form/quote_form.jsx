import React from 'react';
import { Link } from 'react-router-dom';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.blog;
        // title is quote
        // body is source

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const blog = Object.assign({}, this.state);
        if(this.props.formType === 'edit-quote-form') {
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
        return (
            <div className={this.props.formType === 'edit-quote-form' ? "edit-quote-block" : "form-quote-block"}>
                <img className='avatar-form' src={this.props.currentUser.photoUrl}/>
                <form className="quote-form-container" onSubmit={this.handleSubmit}>
                    <h3 id="text-form-user">{this.props.currentUser.username}</h3>
                    <input type="text"
                        className="quote-form-title"
                        placeholder="Quote"
                        onChange={this.update('title')}
                        value={this.state.title || ""}
                    />
                    <br />
                    <textarea cols="62" rows="10"
                        className="text-form-body"
                        placeholder="Who are you quoting?"
                        onChange={this.update('body')}
                        value={this.state.body || ""}
                    />
                    <div className="quote-form-footer">
                        {this.props.formType === 'edit-quote-form' ? this.renderEdit() : this.renderExitModal()}
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

export default QuoteForm;