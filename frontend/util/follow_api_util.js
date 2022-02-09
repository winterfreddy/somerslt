
// expects everything
export const follow = (relationship) => {
    return $.ajax({
        method: "POST",
        url: `/api/follows`,
        data: { relationship }
    })
}

// expects the id of that relationship, not follower_id or followee_id
// can pass in the whole relationship object
export const unfollow = (relationship) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/follows/${relationship.id}`
    })
}