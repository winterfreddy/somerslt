import React from 'react';
import UrlForm from './url_form';

class EditUrlForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.blog;
    }

    render() {
        if (!this.props.blog) return null;

        return (
            <UrlForm
                blog={this.props.blog}
                currentUser={this.props.currentUser}
                errors={this.props.errors}
                processBlog={this.props.processBlog}
                formType={this.props.formType}
            />
        )
    }

}

export default EditUrlForm;