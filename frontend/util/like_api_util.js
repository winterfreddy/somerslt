
export const createLike = (like) => {
    return $.ajax({
        method: "POST",
        url: `/api/likes`,
        data: { like },
        success: () => {
            window.location.reload();
        }
    })
}

export const deleteLike = (like) => (
    $.ajax({
        method: "DELETE",
        url: `/api/likes/${like.id}`,
        success: () => {
            window.location.reload();
        }
    })
)