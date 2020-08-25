import { connect } from 'react-redux';
import { createBlog } from '../../actions/blog_actions';
import { closeModal } from '../../actions/modal_actions';
import PhotoForm from './photo_form';

const mapStateToProps = (state) => ({
    blog: {
        title: "",
        body: "",
        media_type: "photo",
        photoFile: null,
        photoUrl: null,
        author_id: state.session.id
    },
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.blog,
})

const mapDispatchToProps = (dispatch) => ({
    processBlog: (blog) => dispatch(createBlog(blog)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);