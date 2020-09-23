import React from 'react';

const SidebarItem = (props) => {
    console.log('sidebar item props', props);
    let relationship = {follower_id: props.currentUser.id, followee_id: props.user.id}
    return(
        <li className="sidebar-item">
            <h1 className="sidebar-avatar"></h1>
            <div>
                <label>{props.user.username}</label>
            </div>
            <button onSubmit={() => props.follow(relationship)}>Follow</button>
        </li>
    )
}

export default SidebarItem;