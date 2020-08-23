import { connect } from 'react-redux';
import { createBlog } from '../../actions/blog_actions';
import { closeModal } from '../../actions/modal_actions';
import QuoteForm from './quote_form';

const mapStateToProps = (state) => ({
    blog: {
        title: "",
        body: "",
        author_id: state.session.id
    },
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.blog,
})

const mapDispatchToProps = (dispatch) => ({
    processBlog: (blog) => dispatch(createBlog(blog)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);