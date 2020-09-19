
import { connect } from 'react-redux';
import BlogIndex from './blog_index';
import { fetchBlogs, updateBlog, deleteBlog } from '../../actions/blog_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state) => ({
    allBlogs: Object.values(state.entities.blogs),
    allUsers: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchBlogs: () => dispatch(fetchBlogs()),
    deleteBlog: (blog) => dispatch(deleteBlog(blog)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: (modal) => dispatch(openModal(modal)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogIndex);