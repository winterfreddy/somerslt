import { connect } from 'react-redux';
import { createBlog } from '../../actions/blog_actions';
import { closeModal } from '../../actions/modal_actions';
import UrlForm from './url_form';

const mapStateToProps = (state) => ({
    blog: {
        title: "",
        body: "",
        media_type: "url",
        author_id: state.session.id
    },
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.blog,
})

const mapDispatchToProps = (dispatch) => ({
    processBlog: (blog) => dispatch(createBlog(blog)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(UrlForm);