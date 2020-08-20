
export const fetchBlogs = () => (
    $.ajax({
        method: "GET",
        url: `/api/blogs`
    })
)

export const fetchBlog = (blogId) => (
    $.ajax({
        method: "GET",
        url: `/api/blogs/${blogId}`
    })
)

export const createBlog = (blog) => (
    $.ajax({
        method: "POST",
        url: `/api/blogs`,
        data: { blog }
    })
)

export const updateBlog = (blog) => (
    $.ajax({
        method: "PATCH",
        url: `/api/blogs/${blog.id}`,
        data: { blog }
    })
)

export const deleteBlog = (blog) => (
    $.ajax({
        method: "DELETE",
        url: `/api/blogs/${blog.id}`
    })
)