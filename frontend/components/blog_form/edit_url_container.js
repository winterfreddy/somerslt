import { connect } from 'react-redux';
import EditUrlForm from './edit_url_form';
import { fetchBlog, updateBlog } from '../../actions/blog_actions';

const mapStateToProps = (state, ownProps) => ({
    blog: state.entities.blogs[ownProps.match.params.blogId],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.blog,
    formType: 'edit-url-form',
})

const mapDispatchToProps = (dispatch) => ({
    fetchBlog: (blogId) => dispatch(fetchBlog(blogId)),
    processBlog: (blog) => dispatch(updateBlog(blog)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUrlForm);