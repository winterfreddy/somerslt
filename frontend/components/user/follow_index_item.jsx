
import React from 'react';

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
                <img src={props.user.photoUrl}/>
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