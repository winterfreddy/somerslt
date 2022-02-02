import React from 'react';

const avatarPhotoUrl = (props) => {
    if(props.user.photoUrl) {
        return (<img src={props.user.photoUrl}/>)
    }
    else {
        return (<img className='avatar-default'/>)
    }
}

const SidebarItem = (props) => {
    return(
        <li className="sidebar-item">
            <div className="profile">
                {avatarPhotoUrl(props)}
                <label>{props.user.username}</label>
            </div>
            <button className="follow-btn"
                onClick={() => {
                    props.follow({ follower_id: props.currentUser.id, followee_id: props.user.id })
                        .then( () => props.fetchUsers())
                        .then( () => props.fetchBlogs())
                }}>Follow</button>
        </li>
    )
}

export default SidebarItem;