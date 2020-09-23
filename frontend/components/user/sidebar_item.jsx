import React from 'react';

function figureProfilePic(props) {
    console.log(props);
    let profile = "avatar";
    if(props.allUsers !== undefined) {
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

const SidebarItem = (props) => {
    return(
        <li className="sidebar-item">
            <div className="profile">
                {/* <h1 className="sidebar-avatar"></h1> */}
                {figureProfilePic(props)}
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