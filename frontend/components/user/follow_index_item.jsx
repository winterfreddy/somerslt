
import React from 'react';

function figureProfilePic(props) {
    console.log(props);
    let profile = "avatar";
    if (props.allUsers !== undefined) {
        console.log(props.allUsers);
        console.log(props.user.username);
        props.allUsers.forEach((user) => {
            if (user.username === props.user.username) {
                profile = user.username;
            }
        })
        return (
            <h1 className={profile}></h1>
        )
    }
}

const FollowIndexItem = (props) => {
    let userId = props.user.id;
    let relationshipId;
    props.followIds.forEach( (entry) => {
        if(entry.followee_id === userId) {
            relationshipId = entry.id;
        }
    })

    return (
        <li className="follow-item">
            <div className="profile">
                {figureProfilePic(props)}
                <label>{props.user.username}</label>
            </div>
            <button className="unfollow-btn"
                onClick={() => {
                    props.unfollow({ id: relationshipId })
                        .then(() => props.fetchUsers())
                }}>Unfollow</button>
        </li>
    )
}

export default FollowIndexItem;