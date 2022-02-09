
import React from 'react';

const FollowIndexItem = (props) => {
    let userId = props.user.id;
    let relationshipId;
    props.followIds.forEach( (entry) => {
        if(entry.followee_id === userId) {
            relationshipId = entry.id;
        }
    })

    function avatarPhotoUrl(props) {
        if(props.user.photoUrl) {
            return (<img src={props.user.photoUrl}/>)
        }
        else {
            return (<img className='avatar-default'/>)
        }
    }

    return (
        <li className="follow-item">
            <div className="profile">
                {avatarPhotoUrl(props)}
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