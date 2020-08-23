import React from 'react';
import TextForm from './text_form';

class EditTextForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.blog;
    }

    render() {
        if(!this.props.blog) return null;

        return(
            <TextForm
                blog={this.props.blog}
                currentUser={this.props.currentUser}
                errors={this.props.errors}
                processBlog={this.props.processBlog}
                formType={this.props.formType}
                // closeModal={this.props.closeModal}
            />
        )
    }

}

export default EditTextForm;