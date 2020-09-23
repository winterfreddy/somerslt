import React from 'react';
import FollowIndexItem from './follow_index_item';

class FollowIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    userFollow() {
        let followed;
        if (this.props.currentUser.followIds !== undefined) {
            followed = this.props.currentUser.followIds.map((entry) => entry.followee_id);
        }
        return followed;
    }

    renderLabel() {
        let followed = this.userFollow();
        if(followed !== undefined) {
            let number = followed.length;
            return(
                <label>Following&nbsp;{number}&nbsp;Somerslts</label>
            )
        }
    }

    renderFollows() {
        let followed = this.userFollow();
        if (this.props.allUsers !== undefined && followed !== undefined) {
            let followArray = [];
            this.props.allUsers.forEach((user) => {
                if (followed.includes(user.id)) {
                    followArray.push(user);
                }
            })
            return (
                <ul className="follow-section">
                    {
                        followArray.map((user) => (
                            <FollowIndexItem
                                key={user.id}
                                user={user}
                                unfollow={this.props.unfollow}
                                currentUser={this.props.currentUser}
                                fetchUsers={this.props.fetchUsers}
                                fetchBlogs={this.props.fetchBlogs}
                                followIds={this.props.currentUser.followIds}
                            />
                        ))
                    }
                </ul>
            )
        }
    }

    render() {
        console.log(this.props);
        return(
            <div className="following-section">
                <h1>Youre on the Follows page!</h1>
                {this.renderLabel()}
                {this.renderFollows()}
            </div>
        )
    }

}

export default FollowIndex;