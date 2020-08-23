import { connect } from 'react-redux';
import EditPhotoForm from './edit_photo_form';
import { fetchBlog, updateBlog } from '../../actions/blog_actions';

const mapStateToProps = (state, ownProps) => ({
    blog: state.entities.blogs[ownProps.match.params.blogId],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.blog,
    formType: 'edit-photo-form',
})

const mapDispatchToProps = (dispatch) => ({
    fetchBlog: (blogId) => dispatch(fetchBlog(blogId)),
    processBlog: (blog) => dispatch(updateBlog(blog)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPhotoForm);