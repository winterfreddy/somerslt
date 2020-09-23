import React from 'react';

const SidebarItem = (props) => {
    return(
        <li className="sidebar-item">
            <div>
                <h1 className="sidebar-avatar"></h1>
                <div>
                    <label>{props.user.username}</label>
                </div>
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