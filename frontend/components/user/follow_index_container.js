
import { connect } from 'react-redux';
import FollowIndex from './follow_index';
import { fetchUsers } from '../../actions/user_actions';
import { follow, unfollow } from '../../actions/follow_actions';

const mapStateToProps = (state) => ({
    allUsers: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    follow: (relationship) => dispatch(follow(relationship)),
    unfollow: (relationship) => dispatch(unfollow(relationship))
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex);