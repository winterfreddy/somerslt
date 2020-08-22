
export const signup = ( user ) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user },
        success: () => {
            window.location.reload();
        }
    })
)

export const login = ( user ) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user },
        success: () => {
            window.location.reload();
        }
    })
)

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/api/session",
        success: () => {
            window.location.reload();
        }
    })
)