import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TextFormContainer from '../blog_form/text_form_container';
import PhotoFormContainer from '../blog_form/photo_form_container';
import QuoteFormContainer from '../blog_form/quote_form_container';
import UrlFormContainer from '../blog_form/url_form_container'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'text':
            component = <TextFormContainer />
            break;
        case 'photo':
            component = <PhotoFormContainer />
            break;
        case 'quote':
            component = <QuoteFormContainer />
            break;
        case 'url':
            component = <UrlFormContainer />
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    modal: state.ui.modal
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
