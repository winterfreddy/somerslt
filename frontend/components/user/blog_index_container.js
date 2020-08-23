
import { connect } from 'react-redux';
import BlogIndex from './blog_index';
import { fetchBlogs, updateBlog, deleteBlog } from '../../actions/blog_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    allBlogs: Object.values(state.entities.blogs),
    allUsers: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchBlogs: () => dispatch(fetchBlogs()),
    updateBlog: (blog) => dispatch(updateBlog(blog)),
    deleteBlog: (blog) => dispatch(deleteBlog(blog)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogIndex);